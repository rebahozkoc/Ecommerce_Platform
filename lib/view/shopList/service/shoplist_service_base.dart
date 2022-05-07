// ignore_for_file: file_names

import 'package:flutter/material.dart';
import 'package:mobile/view/shopList/model/shoplist_model.dart';

abstract class ShopListServiceBase {
  Future<ShopListResponseModel> getShopList({
    BuildContext context,
    String token,
    int skip,
    int limit,
  });
}