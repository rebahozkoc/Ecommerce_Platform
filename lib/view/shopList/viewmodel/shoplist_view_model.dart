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

  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {
    _repository = locator<ShopListRepository>();
  }

  void dispose() {}

  @observable
  var shopList = ObservableList<ShopListItem>();

  @action
  void setShopList(List<ShopListItem> shopList) {
    this.shopList.clear();
    for (var shopItem in shopList) {
      addNewShop(shopItem);
    }
  }

  @action
  void addNewShop(ShopListItem shopItem) {
    shopList.add(shopItem);
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

  Future<bool> getData() async {
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
}
