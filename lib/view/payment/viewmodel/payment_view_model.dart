import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobx/mobx.dart';
part 'payment_view_model.g.dart';

class PaymentViewModel = _PaymentViewModelBase with _$PaymentViewModel;

abstract class _PaymentViewModelBase with Store, BaseViewModel {
  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {}

  void dispose() {}
}
