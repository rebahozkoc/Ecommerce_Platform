import 'package:flutter/material.dart';
import 'package:mobile/core/base/state/base_state.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/init/theme/color_theme.dart';
import 'package:mobile/core/widgets/address_widget.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/adress/viewmodel/adress_view_model.dart';

class AddressView extends StatefulWidget {
  const AddressView({Key? key}) : super(key: key);

  @override
  State<AddressView> createState() => _AddressViewState();
}

class _AddressViewState extends BaseState<AddressView> {
  int count = 3;
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
            children: [_title(), _newAdress(), _adresses()],
          ),
        ),
      );

  Padding _title() => Padding(
        padding: const EdgeInsets.all(15),
        child: Text(
          "You have $count delivery addresses. From this page, you can create a "
          "new address, edit or delete your existing addresses.\nAddress changes "
          "you make on this page will not affect your previous orders.",
          style: const TextStyle(
            color: AppColors.textColorGray,
            fontSize: 14,
            fontWeight: FontWeight.w500,
          ),
        ),
      );

  Container _newAdress() => Container(
        margin: const EdgeInsets.fromLTRB(16, 8, 16, 8),
        width: double.infinity,
        height: 100,
        decoration: BoxDecoration(
            color: AppColors.white,
            borderRadius: BorderRadius.circular(8),
            border: Border.all(
              color: AppColors.gray,
              width: 0.5,
            )),
        child: InkWell(
          onTap: () {
            debugPrint("Adds new shipping adress clicked");
          },
          child: Column(
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            crossAxisAlignment: CrossAxisAlignment.center,
            mainAxisSize: MainAxisSize.max,
            children: const [
              Icon(
                Icons.add_location_alt_outlined,
                size: 36,
                color: AppColors.darkGray,
              ),
              Text(
                "Add new shipping address",
                style: TextStyle(
                    color: AppColors.darkGray,
                    fontSize: 16,
                    fontWeight: FontWeight.bold),
              )
            ],
          ),
        ),
      );

  ListView _adresses() => ListView.separated(
      padding: const EdgeInsets.fromLTRB(16, 8, 16, 16),
      primary: true,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      itemBuilder: (context, index) => const AddressWidget(
          latitude: 37.42796133580664, longitude: -122.085749655962),
      separatorBuilder: (context, index) => const SizedBox(height: 16),
      itemCount: count);
}
