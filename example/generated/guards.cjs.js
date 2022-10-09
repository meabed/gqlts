
var ValidationError_possibleTypes = ['ValidationError']
module.exports.isValidationError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isValidationError"')
  return ValidationError_possibleTypes.includes(obj.__typename)
}



var ErrorInterface_possibleTypes = ['ValidationError','MongoError','RuntimeError']
module.exports.isErrorInterface = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isErrorInterface"')
  return ErrorInterface_possibleTypes.includes(obj.__typename)
}



var ValidatorError_possibleTypes = ['ValidatorError']
module.exports.isValidatorError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isValidatorError"')
  return ValidatorError_possibleTypes.includes(obj.__typename)
}



var MongoError_possibleTypes = ['MongoError']
module.exports.isMongoError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMongoError"')
  return MongoError_possibleTypes.includes(obj.__typename)
}



var RuntimeError_possibleTypes = ['RuntimeError']
module.exports.isRuntimeError = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRuntimeError"')
  return RuntimeError_possibleTypes.includes(obj.__typename)
}



var Query_possibleTypes = ['Query']
module.exports.isQuery = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



var Viewer_possibleTypes = ['Viewer']
module.exports.isViewer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isViewer"')
  return Viewer_possibleTypes.includes(obj.__typename)
}



var Category_possibleTypes = ['Category']
module.exports.isCategory = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCategory"')
  return Category_possibleTypes.includes(obj.__typename)
}



var ProductConnection_possibleTypes = ['ProductConnection']
module.exports.isProductConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProductConnection"')
  return ProductConnection_possibleTypes.includes(obj.__typename)
}



var PageInfo_possibleTypes = ['PageInfo']
module.exports.isPageInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPageInfo"')
  return PageInfo_possibleTypes.includes(obj.__typename)
}



var ProductEdge_possibleTypes = ['ProductEdge']
module.exports.isProductEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProductEdge"')
  return ProductEdge_possibleTypes.includes(obj.__typename)
}



var Product_possibleTypes = ['Product']
module.exports.isProduct = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProduct"')
  return Product_possibleTypes.includes(obj.__typename)
}



var OrderConnection_possibleTypes = ['OrderConnection']
module.exports.isOrderConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrderConnection"')
  return OrderConnection_possibleTypes.includes(obj.__typename)
}



var OrderEdge_possibleTypes = ['OrderEdge']
module.exports.isOrderEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrderEdge"')
  return OrderEdge_possibleTypes.includes(obj.__typename)
}



var Order_possibleTypes = ['Order']
module.exports.isOrder = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrder"')
  return Order_possibleTypes.includes(obj.__typename)
}



var CustomerAddress_possibleTypes = ['CustomerAddress']
module.exports.isCustomerAddress = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerAddress"')
  return CustomerAddress_possibleTypes.includes(obj.__typename)
}



var OrderDetails_possibleTypes = ['OrderDetails']
module.exports.isOrderDetails = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrderDetails"')
  return OrderDetails_possibleTypes.includes(obj.__typename)
}



var Customer_possibleTypes = ['Customer']
module.exports.isCustomer = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomer"')
  return Customer_possibleTypes.includes(obj.__typename)
}



var Employee_possibleTypes = ['Employee']
module.exports.isEmployee = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEmployee"')
  return Employee_possibleTypes.includes(obj.__typename)
}



var Shipper_possibleTypes = ['Shipper']
module.exports.isShipper = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isShipper"')
  return Shipper_possibleTypes.includes(obj.__typename)
}



var Supplier_possibleTypes = ['Supplier']
module.exports.isSupplier = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSupplier"')
  return Supplier_possibleTypes.includes(obj.__typename)
}



var CustomerPagination_possibleTypes = ['CustomerPagination']
module.exports.isCustomerPagination = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerPagination"')
  return CustomerPagination_possibleTypes.includes(obj.__typename)
}



var PaginationInfo_possibleTypes = ['PaginationInfo']
module.exports.isPaginationInfo = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isPaginationInfo"')
  return PaginationInfo_possibleTypes.includes(obj.__typename)
}



var CustomerConnection_possibleTypes = ['CustomerConnection']
module.exports.isCustomerConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerConnection"')
  return CustomerConnection_possibleTypes.includes(obj.__typename)
}



var CustomerEdge_possibleTypes = ['CustomerEdge']
module.exports.isCustomerEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCustomerEdge"')
  return CustomerEdge_possibleTypes.includes(obj.__typename)
}



var EmployeePagination_possibleTypes = ['EmployeePagination']
module.exports.isEmployeePagination = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isEmployeePagination"')
  return EmployeePagination_possibleTypes.includes(obj.__typename)
}



var OrderPagination_possibleTypes = ['OrderPagination']
module.exports.isOrderPagination = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isOrderPagination"')
  return OrderPagination_possibleTypes.includes(obj.__typename)
}



var ProductPagination_possibleTypes = ['ProductPagination']
module.exports.isProductPagination = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isProductPagination"')
  return ProductPagination_possibleTypes.includes(obj.__typename)
}



var Region_possibleTypes = ['Region']
module.exports.isRegion = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegion"')
  return Region_possibleTypes.includes(obj.__typename)
}



var RegionTerritories_possibleTypes = ['RegionTerritories']
module.exports.isRegionTerritories = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRegionTerritories"')
  return RegionTerritories_possibleTypes.includes(obj.__typename)
}



var SupplierConnection_possibleTypes = ['SupplierConnection']
module.exports.isSupplierConnection = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSupplierConnection"')
  return SupplierConnection_possibleTypes.includes(obj.__typename)
}



var SupplierEdge_possibleTypes = ['SupplierEdge']
module.exports.isSupplierEdge = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSupplierEdge"')
  return SupplierEdge_possibleTypes.includes(obj.__typename)
}



var Mutation_possibleTypes = ['Mutation']
module.exports.isMutation = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



var CreateOneProductPayload_possibleTypes = ['CreateOneProductPayload']
module.exports.isCreateOneProductPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateOneProductPayload"')
  return CreateOneProductPayload_possibleTypes.includes(obj.__typename)
}



var UpdateByIdProductPayload_possibleTypes = ['UpdateByIdProductPayload']
module.exports.isUpdateByIdProductPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateByIdProductPayload"')
  return UpdateByIdProductPayload_possibleTypes.includes(obj.__typename)
}



var RemoveOneProductPayload_possibleTypes = ['RemoveOneProductPayload']
module.exports.isRemoveOneProductPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveOneProductPayload"')
  return RemoveOneProductPayload_possibleTypes.includes(obj.__typename)
}



var CreateOneOrderPayload_possibleTypes = ['CreateOneOrderPayload']
module.exports.isCreateOneOrderPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isCreateOneOrderPayload"')
  return CreateOneOrderPayload_possibleTypes.includes(obj.__typename)
}



var UpdateByIdOrderPayload_possibleTypes = ['UpdateByIdOrderPayload']
module.exports.isUpdateByIdOrderPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateByIdOrderPayload"')
  return UpdateByIdOrderPayload_possibleTypes.includes(obj.__typename)
}



var RemoveOneOrderPayload_possibleTypes = ['RemoveOneOrderPayload']
module.exports.isRemoveOneOrderPayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isRemoveOneOrderPayload"')
  return RemoveOneOrderPayload_possibleTypes.includes(obj.__typename)
}



var UpdateByIdEmployeePayload_possibleTypes = ['UpdateByIdEmployeePayload']
module.exports.isUpdateByIdEmployeePayload = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isUpdateByIdEmployeePayload"')
  return UpdateByIdEmployeePayload_possibleTypes.includes(obj.__typename)
}



var Subscription_possibleTypes = ['Subscription']
module.exports.isSubscription = function(obj) {
  if (!obj || !obj.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}
