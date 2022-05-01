import 'package:flutter/material.dart';
import 'package:mobile/core/base/state/base_state.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/init/theme/color_theme.dart';
import 'package:mobile/core/widgets/productItems/payment_widget.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/payment/viewmodel/payment_view_model.dart';

class PaymentView extends StatefulWidget {
  const PaymentView({Key? key}) : super(key: key);

  @override
  State<PaymentView> createState() => _PaymentViewState();
}

class _PaymentViewState extends BaseState<PaymentView> {
  int count = 2;
  late PaymentViewModel viewModel;
  @override
  Widget build(BuildContext context) {
    return BaseView(
      viewModel: locator<PaymentViewModel>(),
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
        title: const Text("Payment Method"),
      );

  SizedBox _body() => SizedBox(
        width: double.infinity,
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [_title(), _cards()],
          ),
        ),
      );

  Padding _title() => Padding(
        padding: const EdgeInsets.fromLTRB(16, 24, 0, 24),
        child: Text(
          "My Saved Cards ($count)",
          style: const TextStyle(
            color: AppColors.darkGray,
            fontSize: 28,
            fontWeight: FontWeight.w600,
          ),
        ),
      );

  Padding _cards() => Padding(
        padding: const EdgeInsets.fromLTRB(16, 8, 16, 16),
        child: SizedBox(
          height: 150,
          width: double.infinity,
          child: ListView.separated(
            primary: true,
            shrinkWrap: true,
            scrollDirection: Axis.horizontal,
            itemCount: count,
            itemBuilder: (context, index) => const CardWidget(),
            separatorBuilder: (context, index) => const SizedBox(width: 16),
          ),
        ),
      );
}
