class AddressModel {
  String? name;
  String? fullAddress;
  String? postalCode;
  String? city;
  String? province;
  String? country;
  int? id;
  int? userId;

  AddressModel(
      {this.name,
      this.fullAddress,
      this.postalCode,
      this.city,
      this.province,
      this.country,
      this.id,
      this.userId});

  AddressModel.fromJson(Map<String, dynamic> json) {
    name = json['name'];
    fullAddress = json['full_address'];
    postalCode = json['postal_code'];
    city = json['city'];
    province = json['province'];
    country = json['country'];
    id = json['id'];
    userId = json['user_id'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['name'] = name;
    data['full_address'] = fullAddress;
    data['postal_code'] = postalCode;
    data['city'] = city;
    data['province'] = province;
    data['country'] = country;
    data['id'] = id;
    data['user_id'] = userId;
    return data;
  }
}

class AddressesResponseModel {
  String? message;
  bool? isSuccess;
  List<AddressModel>? data;

  AddressesResponseModel({this.message, this.isSuccess, this.data});

  AddressesResponseModel.fromJson(Map<String, dynamic> json) {
    message = json['message'];
    isSuccess = json['isSuccess'];
    if (json['data'] != null) {
      data = <AddressModel>[];
      json['data'].forEach((v) {
        data!.add(AddressModel.fromJson(v));
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

class AddressResponseModel {
  String? message;
  bool? isSuccess;
  AddressModel? data;

  AddressResponseModel({this.message, this.isSuccess, this.data});

  AddressResponseModel.fromJson(Map<String, dynamic> json) {
    message = json['message'];
    isSuccess = json['isSuccess'];
    data = json['data'] != null ? AddressModel.fromJson(json['data']) : null;
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['message'] = message;
    data['isSuccess'] = isSuccess;
    if (this.data != null) {
      data['data'] = this.data!.toJson();
    }
    return data;
  }
}
