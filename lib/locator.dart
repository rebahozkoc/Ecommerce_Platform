import 'package:get_it/get_it.dart';
import 'package:mobile/view/account/viewmodel/account_view_model.dart';
import 'package:mobile/view/address/model/adress_model.dart';
import 'package:mobile/view/address/repository/address_repository.dart';
import 'package:mobile/view/address/service/address_service.dart';
import 'package:mobile/view/address/viewmodel/address_view_model.dart';
import 'package:mobile/view/address/viewmodel/change_address_view_model.dart';
import 'package:mobile/view/auth/login/model/login_model.dart';
import 'package:mobile/view/auth/login/repository/login_repository.dart';
import 'package:mobile/view/auth/login/service/login_service.dart';
import 'package:mobile/view/auth/login/viewmodel/login_view_model.dart';
import 'package:mobile/view/categories/model/category_model.dart';
import 'package:mobile/view/categories/repository/category_repository.dart';
import 'package:mobile/view/categories/service/category_service.dart';
import 'package:mobile/view/categories/viewmodel/categories_view_model.dart';
import 'package:mobile/view/categories/viewmodel/category_view_model.dart';
import 'package:mobile/view/comments/add_comments/viewmodel/add_comments_view_model.dart';
import 'package:mobile/view/comments/viewmodel/comments_view_model.dart';
import 'package:mobile/view/favorites/viewmodel/favorites_view_model.dart';
import 'package:mobile/view/home/viewmodel/home_view_model.dart';
import 'package:mobile/view/orders/viewmodel/orders_view_model.dart';
import 'package:mobile/view/cards/viewmodel/cards_view_model.dart';
import 'package:mobile/view/payment/model/payment_model.dart';
import 'package:mobile/view/payment/repository/payment_repository.dart';
import 'package:mobile/view/payment/service/payment_service.dart';
import 'package:mobile/view/payment/viewmodel/payment_view_model.dart';
import 'package:mobile/view/product/model/product_model.dart';
import 'package:mobile/view/product/repository/product_repository.dart';
import 'package:mobile/view/product/service/product_service.dart';
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
  locator.registerLazySingleton(() => CategoryViewModel());
  locator.registerLazySingleton(() => AccountViewModel());
  locator.registerLazySingleton(() => FavoritesViewModel());
  locator.registerLazySingleton(() => LoginViewModel());
  locator.registerLazySingleton(() => ProductViewModel());
  locator.registerLazySingleton(() => SearchViewModel());
  locator.registerLazySingleton(() => OrdersViewModel());
  locator.registerLazySingleton(() => AddressViewModel());
  locator.registerLazySingleton(() => ChangeAddressViewModel());
  locator.registerLazySingleton(() => CardsViewModel());
  locator.registerLazySingleton(() => PaymentViewModel());
  locator.registerLazySingleton(() => CommentsViewModel());
  locator.registerLazySingleton(() => AddCommentsViewModel());
  
  // Model
  locator.registerLazySingleton(() => UserTokenModel());
  locator.registerLazySingleton(() => CategoriesResponseModel());
  locator.registerLazySingleton(() => CategoryResponseModel());
  locator.registerLazySingleton(() => AddressModel());
  locator.registerLazySingleton(() => AddressResponseModel());
  locator.registerLazySingleton(() => AddressesResponseModel());
<<<<<<< HEAD
  locator.registerLazySingleton(() => PaymentResponseModel());
  locator.registerLazySingleton(() => PaymentsResponseModel());
=======
  locator.registerLazySingleton(() => ProductResponseModel());
>>>>>>> fc6ea7214912a17deaa0218e599abf278e4913e7

  // Repository
  locator.registerLazySingleton(() => LoginRepository());
  locator.registerLazySingleton(() => CategoryRepository());
  locator.registerLazySingleton(() => AddressRepository());
<<<<<<< HEAD
  locator.registerLazySingleton(() => PaymentRepository());
=======
  locator.registerLazySingleton(() => ProductRepository());
>>>>>>> fc6ea7214912a17deaa0218e599abf278e4913e7

  // Service
  locator.registerLazySingleton(() => LoginService());
  locator.registerLazySingleton(() => CategoryService());
  locator.registerLazySingleton(() => AddressService());
<<<<<<< HEAD
  locator.registerLazySingleton(() => PaymentService());
=======
  locator.registerLazySingleton(() => ProductService());
>>>>>>> fc6ea7214912a17deaa0218e599abf278e4913e7
}

Future<void> resetLocator() async {
  await locator.reset();
  await setupLocator();
}
