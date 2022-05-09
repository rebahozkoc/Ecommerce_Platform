import 'package:mobile/view/address/model/adress_model.dart';
import 'package:mobile/view/payment/model/payment_model.dart';
import 'package:mobile/view/product/model/product_model.dart';

class OrderResponseModel {
  String? message;
  bool? isSuccess;
  List<OrderModel>? data;

  OrderResponseModel({this.message, this.isSuccess, this.data});

  OrderResponseModel.fromJson(Map<String, dynamic> json) {
    message = json['message'];
    isSuccess = json['isSuccess'];
    if (json['data'] != null) {
      data = <OrderModel>[];
      json['data'].forEach((v) {
        data!.add(OrderModel.fromJson(v));
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

class OrderModel {
  int? quantity;
  ProductModel? product;
  AddressModel? address;
  PaymentModel? credit;

  OrderModel({this.quantity, this.product, this.address, this.credit});

  OrderModel.fromJson(Map<String, dynamic> json) {
    quantity = json['quantity'];
    product =
        json['product'] != null ? ProductModel.fromJson(json['product']) : null;
    address =
        json['address'] != null ? AddressModel.fromJson(json['address']) : null;
    credit =
        json['credit'] != null ? PaymentModel.fromJson(json['credit']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['quantity'] = quantity;
    if (product != null) {
      data['product'] = product!.toJson();
    }
    if (address != null) {
      data['address'] = address!.toJson();
    }
    if (credit != null) {
      data['credit'] = credit!.toJson();
    }
    return data;
  }
}



