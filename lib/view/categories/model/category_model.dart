class CategoriesResponseModel {
  String? message;
  bool? isSuccess;
  List<CategoryModel>? data;

  CategoriesResponseModel({this.message, this.isSuccess, this.data});

  CategoriesResponseModel.fromJson(Map<String, dynamic> json) {
    message = json['message'];
    isSuccess = json['isSuccess'];
    if (json['data'] != null) {
      data = <CategoryModel>[];
      json['data'].forEach((v) {
        data!.add(CategoryModel.fromJson(v));
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

class CategoryModel {
  String? title;
  int? id;
  String? imageUrl;
  List<SubcategoryModel>? subcategories;

  CategoryModel({this.title, this.id, this.imageUrl, this.subcategories});

  CategoryModel.fromJson(Map<String, dynamic> json) {
    title = json['title'];
    id = json['id'];
    imageUrl = json['image_url'];
    if (json['subcategories'] != null) {
      subcategories = <SubcategoryModel>[];
      json['subcategories'].forEach((v) {
        subcategories!.add(SubcategoryModel.fromJson(v));
      });
    }
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['title'] = title;
    data['id'] = id;
    data['image_url'] = imageUrl;
    if (subcategories != null) {
      data['subcategories'] =
          subcategories!.map((v) => v.toJson()).toList();
    }
    return data;
  }
}

class SubcategoryModel {
  int? id;
  String? title;

  SubcategoryModel({this.id, this.title});

  SubcategoryModel.fromJson(Map<String, dynamic> json) {
    id = json['id'];
    title = json['title'];
  }

  Map<String, dynamic> toJson() {
    final Map<String, dynamic> data = <String, dynamic>{};
    data['id'] = id;
    data['title'] = title;
    return data;
  }
}