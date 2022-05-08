import 'package:flutter/material.dart';
import 'package:mobile/core/constants/app/app_constants.dart';
import 'package:mobile/locator.dart';
import 'package:mobile/view/comments/model/comments_model.dart';
import 'package:mobile/view/comments/service/comments_service_base.dart';
import 'package:mobile/view/comments/service/comments_service.dart';

class CommentsRepository with CommentsServiceBase {
  final _service = locator<CommentsService>();

  @override
  Future<CommentsModelResponse> getComments({
    BuildContext? context,
    int? productId,
  }) async {
    CommentsModelResponse _responseModel = await _service.getComments(
      context: context,
      productId: productId ?? ApplicationConstants.PRODUCT_ID,
    );
    return _responseModel;
  }
}