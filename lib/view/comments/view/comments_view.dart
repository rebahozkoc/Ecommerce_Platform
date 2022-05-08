import 'package:flutter/material.dart';
import 'package:mobile/core/base/view/base_widget.dart';
import 'package:mobile/core/init/theme/color_theme.dart';
import 'package:mobile/core/widgets/productItems/comment_widget.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/comments/model/comments_model.dart';
import 'package:mobile/view/comments/viewmodel/comments_view_model.dart';

class CommentsView extends StatefulWidget {
  final CommentsModel comments;
  const CommentsView({Key? key, required this.comments}) : super(key: key);

  @override
  State<CommentsView> createState() => _CommentsViewState();
}

class _CommentsViewState extends State<CommentsView> {
  late CommentsViewModel viewModel;
  @override
  Widget build(BuildContext context) {
    return BaseView(
      viewModel: locator<CommentsViewModel>(),
      onModelReady: (dynamic model) async {
        model.setContext(context);
        model.init();
        viewModel = model;
        viewModel.comments = widget.comments;
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

  ListView _body() => ListView(
      children: [
        Padding(
            padding: const EdgeInsets.all(12.0),
          child: Column(
            children: [
              Row(
                children: const [
                  Text(
                    "There are 3 comments about this product",
                    style: TextStyle(
                      color: AppColors.black,
                      fontWeight: FontWeight.w700,
                      fontSize: 12,
                    ),
                  )
                ],
              ),
              CommentWidget(comment: viewModel.comments),
              const SizedBox(height: 20),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  addComment(),
                ],
              ),
            ],
          ),
        ),
      ],
  );

  OutlinedButton addComment() => OutlinedButton(
    onPressed: (){
      viewModel.navigateToAddCommentsView(context);
    },
    child: RichText(
        text: const TextSpan(
            children: [
              WidgetSpan(
                child: Icon(Icons.chat_bubble, size: 18, color: AppColors.white,),
              ),
              TextSpan(
                text: " Add Review",
                style: TextStyle(
                  color: AppColors.white,
                  fontSize: 18,
                  fontWeight: FontWeight.w700,
                ),
              )
            ]
        )
    ),
    style: OutlinedButton.styleFrom(
        backgroundColor: AppColors.primary,
        primary: AppColors.primary,
        fixedSize: const Size(360, 60),
        side: const BorderSide(width: 1.0, color: AppColors.primary)
    ),
  );
}

