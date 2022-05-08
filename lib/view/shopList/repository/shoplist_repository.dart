import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:mobile/core/constants/app/app_constants.dart';
import 'package:mobile/core/constants/enums/locale_keys_enum.dart';
import 'package:mobile/core/init/cache/locale_manager.dart';
import 'package:mobile/core/init/network/log_inceptor.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/product/model/product_model.dart';
import 'package:mobile/view/shopList/model/shoplist_model.dart';
import 'package:mobile/view/shopList/service/shoplist_service.dart';
import 'package:mobile/view/shopList/service/shoplist_service_base.dart';

class ShopListRepository extends ShopListServiceBase {
  final _service = locator<ShopListService>();

  @override
  Future<ShopListResponseModel> getShopList({
    BuildContext? context,
    String? token,
    int? skip,
    int? limit,
  }) async {
    if (LocaleManager.instance.getBoolValue(PreferencesKeys.IS_LOGINED) ??
        false) {
      await getUserToken();
      var token = LocaleManager.instance.getStringValue(PreferencesKeys.TOKEN)!;

      ShopListResponseModel _responseModel = await _service.getShopList(
        context: context,
        token: token,
        skip: skip ?? ApplicationConstants.ADDRESS_SKIP,
        limit: limit ?? ApplicationConstants.ADDRESS_LIMIT,
      );
      return _responseModel;
    } else {
      String? _shopListStr =
          LocaleManager.instance.getStringValue(PreferencesKeys.SHOPLIST);

      List<Map<String, dynamic>> _data = _shopListStr != null
          ? json.decode(_shopListStr)
          : <Map<String, dynamic>>[];

      ShopListResponseModel _responseModel = ShopListResponseModel(
        data: _data.map((e) => ShopListItem.fromJson(e)).toList(),
        isSuccess: true,
        message: "Successfully collect the cart",
      );

      return _responseModel;
    }
  }

  @override
  Future<ShopListItemResponseModel> addShopListItem({
    BuildContext? context,
    String? token,
    String? createdAt,
    int? id,
    int? quantity,
  }) async {
    if (LocaleManager.instance.getBoolValue(PreferencesKeys.IS_LOGINED) ??
        false) {
      await getUserToken();
      var token = LocaleManager.instance.getStringValue(PreferencesKeys.TOKEN)!;

      ShopListItemResponseModel _responseModel = await _service.addShopListItem(
        context: context,
        token: token,
        createdAt: createdAt ?? DateTime.now().toIso8601String(),
        id: id ?? 0,
        quantity: quantity ?? 0,
      );

      return _responseModel;
    } else {
      String? _shopListStr =
          LocaleManager.instance.getStringValue(PreferencesKeys.SHOPLIST);

      List<Map<String, dynamic>> _data = _shopListStr != null
          ? json.decode(_shopListStr)
          : <Map<String, dynamic>>[];

      List<ShopListItem> _shopList =
          _data.map((e) => ShopListItem.fromJson(e)).toList();

      _shopList.add(ShopListItem(
        product: ProductModel(
          id: id ?? 0,
        ),
        quantity: quantity ?? 0,
      ));

      _data = _shopList.map((e) => e.toJson()).toList();

      LocaleManager.instance
          .setStringValue(PreferencesKeys.SHOPLIST, json.encode(_data));
      ShopListItemResponseModel _responseModel = ShopListItemResponseModel(
        isSuccess: true,
        data: null,
        message: "Successfully added the product to the cart",
      );

      return _responseModel;
    }
  }

  @override
  Future<ShopListItemResponseModel> deleteShopList({
    BuildContext? context,
    String? token,
  }) async {
    if (LocaleManager.instance.getBoolValue(PreferencesKeys.IS_LOGINED) ??
        false) {
      await getUserToken();
      var token = LocaleManager.instance.getStringValue(PreferencesKeys.TOKEN)!;

      ShopListItemResponseModel _responseModel = await _service.deleteShopList(
        context: context,
        token: token,
      );

      return _responseModel;
    } else {
      LocaleManager.instance.setStringValue(PreferencesKeys.SHOPLIST, '[]');
      ShopListItemResponseModel _responseModel = ShopListItemResponseModel(
        isSuccess: true,
        data: null,
        message: "Successfully deleted the cart",
      );

      return _responseModel;
    }
  }

  @override
  Future<ShopListItemResponseModel> deleteShopListItem({
    BuildContext? context,
    String? token,
    int? id,
  }) async {
    if (LocaleManager.instance.getBoolValue(PreferencesKeys.IS_LOGINED) ??
        false) {
      await getUserToken();
      var token = LocaleManager.instance.getStringValue(PreferencesKeys.TOKEN)!;

      ShopListItemResponseModel _responseModel =
          await _service.deleteShopListItem(
        context: context,
        token: token,
        id: id ?? 0,
      );

      return _responseModel;
    } else {
      String? _shopListStr =
          LocaleManager.instance.getStringValue(PreferencesKeys.SHOPLIST);

      List<Map<String, dynamic>> _data = _shopListStr != null
          ? json.decode(_shopListStr)
          : <Map<String, dynamic>>[];

      List<ShopListItem> _shopList =
          _data.map((e) => ShopListItem.fromJson(e)).toList();

      _shopList.removeWhere((e) => e.product!.id == id);

      _data = _shopList.map((e) => e.toJson()).toList();

      LocaleManager.instance
          .setStringValue(PreferencesKeys.SHOPLIST, json.encode(_data));
      ShopListItemResponseModel _responseModel = ShopListItemResponseModel(
        isSuccess: true,
        data: null,
        message: "Successfully deleted the product from the cart",
      );

      return _responseModel;
    }
  }

  @override
  Future<ShopListItemResponseModel> getShopListItem({
    BuildContext? context,
    String? token,
    int? id,
  }) async {
    if (LocaleManager.instance.getBoolValue(PreferencesKeys.IS_LOGINED) ??
        false) {
      await getUserToken();
      var token = LocaleManager.instance.getStringValue(PreferencesKeys.TOKEN)!;

      ShopListItemResponseModel _responseModel = await _service.getShopListItem(
        context: context,
        token: token,
        id: id ?? 0,
      );

      return _responseModel;
    } else {
      String? _shopListStr =
          LocaleManager.instance.getStringValue(PreferencesKeys.SHOPLIST);

      List<Map<String, dynamic>> _data = _shopListStr != null
          ? json.decode(_shopListStr)
          : <Map<String, dynamic>>[];

      List<ShopListItem> _shopList =
          _data.map((e) => ShopListItem.fromJson(e)).toList();

      ShopListItem _shopListItem =
          _shopList.firstWhere((e) => e.product!.id == id);

      ShopListItemResponseModel _responseModel = ShopListItemResponseModel(
        isSuccess: true,
        data: _shopListItem,
        message: "Successfully collect the product from the cart",
      );

      return _responseModel;
    }
  }

  @override
  Future<ShopListItemResponseModel> updateShopListItem({
    BuildContext? context,
    String? token,
    int? id,
    int? quantity,
  }) async {
    if (LocaleManager.instance.getBoolValue(PreferencesKeys.IS_LOGINED) ??
        false) {
      await getUserToken();
      var token = LocaleManager.instance.getStringValue(PreferencesKeys.TOKEN)!;
      ShopListItemResponseModel _responseModel =
          await _service.updateShopListItem(
        context: context,
        token: token,
        id: id ?? 0,
        quantity: quantity ?? 0,
      );
      return _responseModel;
    } else {
      String? _shopListStr =
          LocaleManager.instance.getStringValue(PreferencesKeys.SHOPLIST);

      List<Map<String, dynamic>> _data = _shopListStr != null
          ? json.decode(_shopListStr)
          : <Map<String, dynamic>>[];

      List<ShopListItem> _shopList =
          _data.map((e) => ShopListItem.fromJson(e)).toList();

      _shopList.firstWhere((e) => e.product!.id == id).quantity = quantity ?? 0;

      _data = _shopList.map((e) => e.toJson()).toList();

      LocaleManager.instance
          .setStringValue(PreferencesKeys.SHOPLIST, json.encode(_data));
      ShopListItemResponseModel _responseModel = ShopListItemResponseModel(
        isSuccess: true,
        data: null,
        message: "Successfully updated the product in the cart",
      );

      return _responseModel;
    }
  }
}
