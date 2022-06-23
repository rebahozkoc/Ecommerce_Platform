import 'package:mobile/view/product/model/product_model.dart';

class FavoritesResponseModel {
  String? message;
  bool? isSuccess;
  List<FavoritesModel>? data;

  FavoritesResponseModel({this.message, this.isSuccess, this.data});

  FavoritesResponseModel.fromJson(Map<String, dynamic> json) {
    message = json['message'];
    isSuccess = json['isSuccess'];
    if (json['data'] != null) {
      data = <FavoritesModel>[];
      json['data'].forEach((v) {
        data!.add(FavoritesModel.fromJson(v));
      });
    }
  }
}

class FavoritesModel {
  int? id;
  int? productId;
  int? userId;
  FavoritesModel({this.id, this.productId, this.userId});

  FavoritesModel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    productId = json['productId'];
    userId = json['userId'];
  }

  Map<String, dynamic> toJson(){
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['productId'] = productId;
    data['userId'] = userId;
    return data;
  }
}

