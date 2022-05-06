import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobile/core/constants/app/app_constants.dart';
import 'package:mobile/core/constants/navigation/navigation_constants.dart';
import 'package:mobile/core/init/navigation/navigation_service.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/payment/model/payment_model.dart';
import 'package:mobile/view/payment/repository/payment_repository.dart';
import 'package:mobx/mobx.dart';
import 'package:mobile/core/widgets/ToastMessage.dart';
part 'payment_view_model.g.dart';

class PaymentViewModel = _PaymentViewModelBase with _$PaymentViewModel;

abstract class _PaymentViewModelBase with Store, BaseViewModel {
  late PaymentRepository _repository;
  late PaymentResponseModel _paymentResponseModel;
  late PaymentsResponseModel _paymentsResponseModel;

  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {
    _repository = locator<PaymentRepository>();
  }

  void dispose() {}

  @observable
  var payments = ObservableList<PaymentModel>();

  void setPayments(List<PaymentModel> payments) {
    this.payments.clear();
    for (var payment in payments) {
      addNewPayment(payment);
    }
  }

  @action
  void addNewPayment(PaymentModel payment) {
    payments.add(payment);
  }

  @action
  Future<void> deletePayment({required int index, required int id}) async {
    _paymentResponseModel = await _repository.deletePayment(
      context: context,
      id: id,
    );
    if (_paymentResponseModel.isSuccess ?? false) {
      payments.removeAt(index);
      showToast(
          context: context!,
          message: "Payment deleted successfully",
          isSuccess: false);
    } else {
      showToast(
          context: context!,
          message: _paymentResponseModel.message ??
              ApplicationConstants.ERROR_MESSAGE,
          isSuccess: false);
    }
  }

  Future<bool> getData() async {
    _paymentsResponseModel = await _repository.getPayments(
      context: context,
    );
    setPayments(_paymentsResponseModel.data!);
    return _paymentsResponseModel.isSuccess!;
  }

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
