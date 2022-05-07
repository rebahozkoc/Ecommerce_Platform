import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:mobile/core/constants/app/app_constants.dart';
import 'package:mobile/core/constants/enums/locale_keys_enum.dart';
import 'package:mobile/core/init/cache/locale_manager.dart';
import 'package:mobile/core/init/network/log_inceptor.dart';
import 'package:mobile/locator.dart';
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
      String _shopListStr =
          LocaleManager.instance.getStringValue(PreferencesKeys.SHOPLIST) ??
              '{}';
      debugPrint("_shopListStr: $_shopListStr");
      var _shopList = json.decode(_shopListStr);
      debugPrint("_shopList: $_shopList");

      ShopListResponseModel _responseModel =
          ShopListResponseModel.fromJson(_shopList);
      _responseModel.isSuccess = true;
      
      _responseModel.data ??= [];
      return _responseModel;
    }
  }
}
