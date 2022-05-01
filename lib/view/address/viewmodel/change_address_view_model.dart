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
  void init() {
    nameNode.addListener(_listener);
    phoneNode.addListener(_listener);
  }

  void dispose() {
    nameNode.removeListener(_listener);
    phoneNode.removeListener(_listener);
  }

  @action
  void _listener() {
    nameFocused = nameNode.hasFocus;
    phoneFocused = phoneNode.hasFocus;
  }

  @observable
  bool nameFocused = false, phoneFocused = false;

  @observable
  FocusNode nameNode = FocusNode();

  @observable
  FocusNode phoneNode = FocusNode();

  @observable
  TextEditingController nameController = TextEditingController();

  @observable
  TextEditingController phoneController = TextEditingController();
}
