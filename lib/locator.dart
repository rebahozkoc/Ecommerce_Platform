import 'package:get_it/get_it.dart';
import 'package:mobile/view/account/viewmodel/account_view_model.dart';
import 'package:mobile/view/address/viewmodel/address_view_model.dart';
import 'package:mobile/view/address/viewmodel/change_address_view_model.dart';
import 'package:mobile/view/auth/login/viewmodel/login_view_model.dart';
import 'package:mobile/view/categories/viewmodel/categories_view_model.dart';
import 'package:mobile/view/favorites/viewmodel/favorites_view_model.dart';
import 'package:mobile/view/home/viewmodel/home_view_model.dart';
import 'package:mobile/view/orders/viewmodel/orders_view_model.dart';
import 'package:mobile/view/cards/viewmodel/cards_view_model.dart';
import 'package:mobile/view/product/viewmodel/product_view_model.dart';
import 'package:mobile/view/search/viewmodel/search_view_model.dart';
import 'package:mobile/view/shopList/viewmodel/shoplist_view_model.dart';

GetIt locator = GetIt.instance;

///  The "get_it" library is required to automatically install lazy singleton , singleton architectures.

Future<void> setupLocator() async {
  // ViewModel
  locator.registerLazySingleton(() => HomeViewModel());
  locator.registerLazySingleton(() => ShopListViewModel());
  locator.registerLazySingleton(() => CategoriesViewModel());
  locator.registerLazySingleton(() => AccountViewModel());
  locator.registerLazySingleton(() => FavoritesViewModel());
  locator.registerLazySingleton(() => LoginViewModel());
  locator.registerLazySingleton(() => ProductViewModel());
  locator.registerLazySingleton(() => SearchViewModel());
  locator.registerLazySingleton(() => OrdersViewModel());
  locator.registerLazySingleton(() => AddressViewModel());
  locator.registerLazySingleton(() => ChangeAddressViewModel());
  locator.registerLazySingleton(() => CardsViewModel());
}

Future<void> resetLocator() async {
  await locator.reset();
  await setupLocator();
}
