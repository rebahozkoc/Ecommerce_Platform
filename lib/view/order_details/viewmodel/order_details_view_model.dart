import 'package:mobx/mobx.dart';
part 'order_details_view_model.g.dart';

class OrderDetailsViewModel = _OrderDetailsViewModelBase
    with _$OrderDetailsViewModel;

abstract class _OrderDetailsViewModelBase with Store {}
