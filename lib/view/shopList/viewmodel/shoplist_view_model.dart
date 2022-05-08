import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobile/core/constants/app/app_constants.dart';
import 'package:mobile/core/constants/enums/locale_keys_enum.dart';
import 'package:mobile/core/constants/navigation/navigation_constants.dart';
import 'package:mobile/core/init/cache/locale_manager.dart';
import 'package:mobile/core/init/navigation/navigation_service.dart';
import 'package:mobile/core/widgets/ToastMessage.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/shopList/model/shoplist_model.dart';
import 'package:mobile/view/shopList/repository/shoplist_repository.dart';
import 'package:mobx/mobx.dart';
part 'shoplist_view_model.g.dart';

class ShopListViewModel = _ShopListViewModelBase with _$ShopListViewModel;

abstract class _ShopListViewModelBase with Store, BaseViewModel {
  late ShopListRepository _repository;
  late ShopListResponseModel _shopListResponseModel;
  late ShopListItemResponseModel _shopListItemResponseModel;

  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {
    _repository = locator<ShopListRepository>();
  }

  void dispose() {}

  @observable
  var shopList = ObservableList<ShopListItem>();

  @observable
  int totalPrice = 0;

  @action
  void setShopList(List<ShopListItem> shopList) {
    totalPrice = 0;
    this.shopList.clear();
    for (var shopItem in shopList) {
      addShop(shopItem);
    }
  }

  @action
  void clearShopList() {
    shopList.clear();
    totalPrice = 0;
  }

  @action
  void addShop(ShopListItem shopItem) {
    shopList.add(shopItem);
    increasePrice(
        shopItem.quantity!.toInt() * shopItem.product!.price!.toInt());
  }

  @action
  void removeShop(ShopListItem shopItem) {
    shopList.remove(shopItem);
    decreasePrice(
        shopItem.quantity!.toInt() * shopItem.product!.price!.toInt());
  }

  @action
  void increasePrice(int price) {
    totalPrice += price;
  }

  @action
  void decreasePrice(int price) {
    totalPrice -= price;
  }

  @action
  void clearShopListAndGetData() {
    clearShopList();
    getShopList();
  }

  Future<bool> increaseQuantity(ShopListItem shopItem) async {
    debugPrint('increaseQuantity');
    shopItem.quantity = shopItem.quantity!.toInt() + 1;
    bool _isSucess = await updateShopListItem(shopItem);
    if (_isSucess) {
      increasePrice(shopItem.product!.price!.toInt());
    } else {
      shopItem.quantity = shopItem.quantity!.toInt() - 1;
    }

    return _isSucess;
  }

  Future<bool> decreaseQuantity(ShopListItem shopItem) async {
    if (shopItem.quantity!.toInt() > 1) {
      shopItem.quantity = shopItem.quantity!.toInt() - 1;
      bool _isSucess = await updateShopListItem(shopItem);
      if (_isSucess) {
        decreasePrice(shopItem.product!.price!.toInt());
      } else {
        shopItem.quantity = shopItem.quantity!.toInt() + 1;
      }
      return _isSucess;
    } else {
      bool _isSucess = await deleteShopListItem(shopItem);
      if (_isSucess) {
        removeShop(shopItem);
      } else {
        shopItem.quantity = shopItem.quantity!.toInt() + 1;
      }
      return _isSucess;
    }
  }

  Future<bool> getShopList() async {
    _shopListResponseModel = await _repository.getShopList(
      context: context,
    );
    if (_shopListResponseModel.isSuccess ?? false) {
      setShopList(_shopListResponseModel.data!);
    } else {
      showToast(
          context: context!,
          message: _shopListResponseModel.message ??
              ApplicationConstants.ERROR_MESSAGE,
          isSuccess: false);
    }

    return _shopListResponseModel.isSuccess!;
  }

  Future<bool> updateShopListItem(ShopListItem shopItem) async {

    _shopListItemResponseModel = await _repository.updateShopListItem(
      context: context,
      id: shopItem.product?.id,
      quantity: shopItem.quantity,
    );
    if (!(_shopListItemResponseModel.isSuccess ?? false)) {
      showToast(
          context: context!,
          message: _shopListItemResponseModel.message ??
              ApplicationConstants.ERROR_MESSAGE,
          isSuccess: false);
    }

    return _shopListItemResponseModel.isSuccess!;
  }

  Future<bool> deleteShopListItem(ShopListItem shopItem) async {
    _shopListItemResponseModel = await _repository.deleteShopListItem(
      context: context,
      id: shopItem.product?.id,
    );

    if (!(_shopListItemResponseModel.isSuccess ?? false)) {
      showToast(
          context: context!,
          message: _shopListItemResponseModel.message ??
              ApplicationConstants.ERROR_MESSAGE,
          isSuccess: false);
    }

    return _shopListItemResponseModel.isSuccess!;
  }

  void navigateToPayment() => NavigationService.instance.navigateToPage(
      path: (LocaleManager.instance.getBoolValue(PreferencesKeys.IS_LOGINED) ??
                  false) ||
              (LocaleManager.instance
                      .getBoolValue(PreferencesKeys.IS_REGISTERED) ??
                  false)
          ? NavigationConstants.PAYMENT
          : NavigationConstants.LOGIN_REQUIRED,
      data: "Please login to complete the purchase");
}
