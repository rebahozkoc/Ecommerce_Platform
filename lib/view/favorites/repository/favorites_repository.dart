import 'package:flutter/material.dart';
import 'package:mobile/core/constants/app/app_constants.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/favorites/model/favorites_model.dart';
import 'package:mobile/view/favorites/service/favorites_service.dart';
import 'package:mobile/view/favorites/service/favorites_service_base.dart';

class FavoritesRepository with FavoritesServiceBase {
  final _service = locator<FavoritesService>();

  @override
  Future<FavoritesResponseModel> getFavorites({
    BuildContext? context,
    int? skip,
    int? limit,
  }) async {
    FavoritesResponseModel _responseModel = await _service.getFavorites(
      context: context,
      skip: skip ?? ApplicationConstants.FAVORITES_SKIP,
      limit: limit ?? ApplicationConstants.FAVORITES_LIMIT,
    );
    return _responseModel;
  }
}
