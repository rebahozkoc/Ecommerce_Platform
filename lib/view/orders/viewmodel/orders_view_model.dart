import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobile/core/constants/navigation/navigation_constants.dart';
import 'package:mobx/mobx.dart';
import 'package:persistent_bottom_nav_bar/persistent-tab-view.dart';
import 'package:mobile/view/order_details/view/order_details_view.dart';
part 'orders_view_model.g.dart';

class OrdersViewModel = _OrdersViewModelBase with _$OrdersViewModel;

abstract class _OrdersViewModelBase with Store, BaseViewModel {
  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {}

  void dispose() {}

  void navigateToDetails(BuildContext context) => pushNewScreenWithRouteSettings(
    context,
    screen: const OrderDetailsView(),
    settings: const RouteSettings(name: NavigationConstants.ORDERS),
    withNavBar: true,
    pageTransitionAnimation: PageTransitionAnimation.cupertino,
  );
}
