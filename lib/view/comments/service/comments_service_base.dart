import 'package:flutter/material.dart';
import 'package:mobile/view/comments/model/comments_model.dart';

abstract class CommentsServiceBase {
  Future<CommentsModel> getComments({
    BuildContext context,
    int productId,
  });
}
