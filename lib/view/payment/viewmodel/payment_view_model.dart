import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobile/core/constants/navigation/navigation_constants.dart';
import 'package:mobile/core/init/navigation/navigation_service.dart';
import 'package:mobx/mobx.dart';
part 'payment_view_model.g.dart';

class PaymentViewModel = _PaymentViewModelBase with _$PaymentViewModel;

abstract class _PaymentViewModelBase with Store, BaseViewModel {
  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {}

  void dispose() {}

  @observable
  TextEditingController cardMethodController = TextEditingController();

  @observable
  TextEditingController cardNumberController = TextEditingController();
  @observable
  TextEditingController cardHolderController = TextEditingController();
  @observable
  TextEditingController cardSecurtiyController = TextEditingController();
  @observable
  TextEditingController cardDateController = TextEditingController();

  void navigateToAddAddress() => NavigationService.instance
      .navigateToPage(path: NavigationConstants.CHANGE_ADRESS);

  @observable
  int selectedAddress = 0;

  @observable
  int selectedCard = 0;

  @observable
  int cardButtonIndex = 0;

  @action
  void setSelectedCard(int index) => selectedCard = index;

  @action
  void setSelectedAddress(int index) => selectedAddress = index;

  @action
  void setCardButtonIndex(int index) => cardButtonIndex = index;
}
