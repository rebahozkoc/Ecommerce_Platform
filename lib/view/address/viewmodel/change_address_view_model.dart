import 'package:flutter/material.dart';
import 'package:mobile/core/base/model/base_view_model.dart';
import 'package:mobx/mobx.dart';
part 'change_address_view_model.g.dart';

class ChangeAddressViewModel = _ChangeAddressViewModelBase
    with _$ChangeAddressViewModel;

abstract class _ChangeAddressViewModelBase with Store, BaseViewModel {
  @override
  void setContext(BuildContext context) => this.context = context;

  @override
  void init() {}

  void dispose() {}
}
