import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobile/core/constants/enums/locale_keys_enum.dart';
import 'package:mobile/core/constants/navigation/navigation_constants.dart';
import 'package:mobile/core/init/cache/locale_manager.dart';
import 'package:mobile/core/init/navigation/navigation_service.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/orders/view/orders_view.dart';
import 'package:mobile/view/address/view/address_view.dart';
import 'package:mobile/view/cards/view/cards_view.dart';
import 'package:mobx/mobx.dart';
import 'package:persistent_bottom_nav_bar/persistent-tab-view.dart';
part 'account_view_model.g.dart';

class AccountViewModel = _AccountViewModelBase with _$AccountViewModel;

abstract class _AccountViewModelBase with Store, BaseViewModel {
  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {}

  void dispose() {}

  void navigateToOrders(BuildContext context) => pushNewScreenWithRouteSettings(
        context,
        screen: const OrdersView(),
        settings: const RouteSettings(name: NavigationConstants.ORDERS),
        withNavBar: true,
        pageTransitionAnimation: PageTransitionAnimation.cupertino,
      );

  void navigateToCardsView(BuildContext context) =>
      pushNewScreenWithRouteSettings(
        context,
        screen: const CardsView(),
        settings: const RouteSettings(name: NavigationConstants.CARDS),
        withNavBar: true,
        pageTransitionAnimation: PageTransitionAnimation.cupertino,
      );

  void navigateToAdressView(BuildContext context) =>
      pushNewScreenWithRouteSettings(
        context,
        screen: const AddressView(),
        settings: const RouteSettings(name: NavigationConstants.ADRESS),
        withNavBar: true,
        pageTransitionAnimation: PageTransitionAnimation.cupertino,
      );

  void logout() async {
    await LocaleManager.instance
        .setBoolValue(PreferencesKeys.IS_LOGINED, false);

    await LocaleManager.instance
        .setBoolValue(PreferencesKeys.IS_REGISTERED, false);

    await LocaleManager.instance.setStringValue(PreferencesKeys.TOKEN, "");

    await resetLocator();

    NavigationService.instance
        .navigateToPageClear(path: NavigationConstants.LOGIN);
  }
}
