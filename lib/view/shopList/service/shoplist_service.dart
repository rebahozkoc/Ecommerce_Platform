import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:mobile/core/constants/path/url_path_constants.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/shopList/model/shoplist_model.dart';
import 'package:mobile/view/shopList/service/shoplist_service_base.dart';

class ShopListService extends ShopListServiceBase {
  @override
  Future<ShopListResponseModel> getShopList({
    BuildContext? context,
    String? token,
    int? skip,
    int? limit,
  }) async {
    ShopListResponseModel _responseModel = locator<ShopListResponseModel>();
    try {
      Response response;
      Dio dio = Dio();

      var header = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer $token',
      };

      var data = {
        'skip': skip,
        'limit': limit,
      };

      response = await dio.get(
        PathConstants.SHOPLIST,
        queryParameters: data,
        options: Options(headers: header),
      );

      _responseModel = ShopListResponseModel.fromJson(response.data);
      return _responseModel;
    } on DioError catch (exception) {
      debugPrint(exception.response!.toString());
      _responseModel = locator<ShopListResponseModel>();
      _responseModel.isSuccess = false;
      _responseModel.message = "Error!!!";
      return _responseModel;
    }
  }
}
