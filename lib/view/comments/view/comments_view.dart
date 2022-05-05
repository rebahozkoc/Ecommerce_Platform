import 'package:flutter/material.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/init/theme/color_theme.dart';
import 'package:mobile/locator.dart';

class CommentsView extends StatelessWidget {
  const CommentsView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return BaseView(
      viewModel: locator<>(),
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
    title: const Text("All Comments"),
  );



}
