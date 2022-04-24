import 'package:flutter/material.dart';
import 'package:mobile/core/base/state/base_state.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/widgets/adress_widget.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/adress/viewmodel/adress_view_model.dart';

class AddressView extends StatefulWidget {
  const AddressView({Key? key}) : super(key: key);

  @override
  State<AddressView> createState() => _AddressViewState();
}

class _AddressViewState extends BaseState<AddressView> {
  late AdressViewModel viewModel;
  @override
  Widget build(BuildContext context) {
    return BaseView(
      viewModel: locator<AdressViewModel>(),
      onModelReady: (dynamic model) async {
        model.setContext(context);
        model.init();
        viewModel = model;
      },
      onPageBuilder: (context, value) {
        return Scaffold(
          appBar: _appBar(),
          body: _body(),
        );
      },
    );
  }

  AppBar _appBar() => AppBar(
        title: const Text("Shipping Address"),
      );

  SizedBox _body() => SizedBox(
        width: double.infinity,
        child: SingleChildScrollView(
          child: Column(
            children: [_adresses()],
          ),
        ),
      );

  ListView _adresses() => ListView.separated(
      primary: true,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemBuilder: (context, index) => const AddressWidget(
          latitude: 37.42796133580664, longitude: -122.085749655962),
      separatorBuilder: (context, index) => const SizedBox(height: 16),
      itemCount: 2);
}
