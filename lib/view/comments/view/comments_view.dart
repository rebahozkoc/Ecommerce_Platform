import 'package:flutter/material.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/comments/viewmodel/comments_view_model.dart';

class CommentsView extends StatelessWidget {
  const CommentsView({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    late CommentsViewModel viewModel;
    return BaseView(
      viewModel: locator<CommentsViewModel>(),
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

  Center _body() => const Center(
        child: Text("Comments"),
      );
}
