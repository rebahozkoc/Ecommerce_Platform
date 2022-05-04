import 'package:dio/dio.dart';
import 'package:flutter/material.dart';
import 'package:mobile/core/constants/path/url_path_constants.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/categories/model/category_model.dart';
import 'package:mobile/view/categories/service/category_service_base.dart';

class CategoryService with CategoryServiceBase {
  @override
  Future<CategoryModel> getCategories({
    BuildContext? context,
    String? language,
    int? skip,
    int? limit,
  }) async {
    CategoryModel _responseModel = locator<CategoryModel>();
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
        PathConstants.CATEGORY,
        queryParameters: data,
        options: Options(headers: header),
      );

      _responseModel = CategoryModel.fromJson(response.data);
      return _responseModel;
    } on DioError catch (exception) {
      debugPrint("Error");
      debugPrint(exception.response!.data);
      _responseModel = locator<CategoryModel>();
      _responseModel.isSuccess = false;
      _responseModel.message = "Error!!!";
      return _responseModel;
    }
  }
}
