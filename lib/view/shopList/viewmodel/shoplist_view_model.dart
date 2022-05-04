import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobile/core/constants/enums/locale_keys_enum.dart';
import 'package:mobile/core/constants/navigation/navigation_constants.dart';
import 'package:mobile/core/init/cache/locale_manager.dart';
import 'package:mobile/core/init/navigation/navigation_service.dart';
import 'package:mobx/mobx.dart';
part 'shoplist_view_model.g.dart';

class ShopListViewModel = _ShopListViewModelBase with _$ShopListViewModel;

abstract class _ShopListViewModelBase with Store, BaseViewModel {
  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {}

  void dispose() {}

  void navigateToPayment() => NavigationService.instance.navigateToPage(
      path: (LocaleManager.instance.getBoolValue(PreferencesKeys.IS_LOGINED) ??
                  false) ||
              (LocaleManager.instance
                      .getBoolValue(PreferencesKeys.IS_REGISTERED) ??
                  false)
          ? NavigationConstants.PAYMENT
          : NavigationConstants.LOGIN_REQUIRED,data: "Please login to complete the purchase");
}
