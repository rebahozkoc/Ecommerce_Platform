// ignore_for_file: constant_identifier_names

import 'package:mobile/core/constants/app/app_constants.dart';

class PathConstants {
  static const _URL = ApplicationConstants.BASE_URL;

  // AUTH
  static const LOGIN = _URL + 'api/v1/auth/login';

  // CATEGORY
  static const CATEGORY = _URL + 'api/v1/categories';

  // ADDRESS  
  static const ADDRESS = _URL + 'api/v1/user/addresses';

  // CREDIT CARD
  static const PAYMENT = _URL + 'api/v1/user/credit';

  // PRODUCT
  static const PRODUCT = _URL + 'api/v1/products';

  // SHOPLIST
  static const SHOPLIST = _URL + 'api/v1/users/shopping_cart';
}
