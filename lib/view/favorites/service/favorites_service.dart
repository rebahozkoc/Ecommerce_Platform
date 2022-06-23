import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:mobile/core/constants/path/url_path_constants.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/favorites/model/favorites_model.dart';
import 'package:mobile/view/favorites/service/favorites_service_base.dart';

class FavoritesService with FavoritesServiceBase {
  @override
  Future<FavoritesResponseModel> getFavorites({
    BuildContext? context,
    int? skip,
    int? limit,
  }) async {
    FavoritesResponseModel _responseModel = locator<FavoritesResponseModel>();
    try {
      Response response;
      Dio dio = Dio();

      var header = {
        'Content-Type': 'application/json',
      };

      var data = {
        'skip': skip,
        'limit': limit,
      };
      response = await dio.get(
        PathConstants.FAVORITES,
        queryParameters: data,
        options: Options(headers: header),
      );

      _responseModel = FavoritesResponseModel.fromJson(response.data);
      return _responseModel;
    } on DioError catch (exception) {
      debugPrint("Error");
      debugPrint(exception.response!.data);
      _responseModel = locator<FavoritesResponseModel>();
      _responseModel.isSuccess = false;
      _responseModel.message = "Error!!!";
      return _responseModel;
    }
  }
}
