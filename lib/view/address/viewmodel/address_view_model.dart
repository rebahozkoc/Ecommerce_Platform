import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobx/mobx.dart';
part 'adress_view_model.g.dart';

class AddressViewModel = _AddressViewModelBase with _$AddressViewModel;

abstract class _AddressViewModelBase with Store, BaseViewModel {
  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {}

  void dispose() {}
}
