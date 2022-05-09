import 'package:mobile/view/account/model/account_model.dart';

class CommentsModelResponse {
  String? message;
  bool? isSuccess;
  List<CommentModel>? data;

  CommentsModelResponse({this.message, this.isSuccess, this.data});

  CommentsModelResponse.fromJson(Map<String, dynamic> json) {
    message = json['message'];
    isSuccess = json['isSuccess'];
    if (json['data'] != null) {
      data = <CommentModel>[];
      json['data'].forEach((v) {
        data!.add(CommentModel.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['message'] = message;
    data['isSuccess'] = isSuccess;
    if (this.data != null) {
      data['data'] = this.data!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class CommentModel {
  int? id;
  int? productId;
  String? content;
  int? rate;
  User? user;

  CommentModel({this.id, this.productId, this.content, this.user, this.rate});

  CommentModel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    productId = json['product_id'];
    content = json['content'];
    user = json['user'] != null ? User.fromJson(json['user']) : null;
    rate = json['rate'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['product_id'] = productId;
    data['content'] = content;
    data['rate'] = rate;
    if (user != null) {
      data['user'] = user!.toJson();
    }
    return data;
  }
}
