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

  @action
  void _listener() {}

  @observable
  TextEditingController nameController = TextEditingController();

  @observable
  TextEditingController phoneController = TextEditingController();

  @observable
  TextEditingController provinceController = TextEditingController();

  @observable
  TextEditingController cityController = TextEditingController();

  @observable
  TextEditingController postalCodeController = TextEditingController();

  @observable
  TextEditingController countryController = TextEditingController();

  @observable
  TextEditingController adressController = TextEditingController();

  @observable
  TextEditingController adressNameController = TextEditingController();
}
