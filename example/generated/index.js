const {
  linkTypeMap,
  createClient: createClientOriginal,
  generateGraphqlOperation,
  assertSameVersion,
} = require('@gqlts/runtime')
var typeMap = linkTypeMap(require('./types.cjs'))

var version = '3.2.10'
assertSameVersion(version)

module.exports.version = version

module.exports.createClient = function (options) {
  options = options || {}
  var optionsCopy = {
    url: 'https://graphql-compose.herokuapp.com/northwind/',
    queryRoot: typeMap.Query,
    mutationRoot: typeMap.Mutation,
    subscriptionRoot: typeMap.Subscription,
  }
  for (var name in options) {
    optionsCopy[name] = options[name]
  }
  return createClientOriginal(optionsCopy)
}

module.exports.enumSortConnectionOrderEnum = {
  _ID_DESC: '_ID_DESC',
  _ID_ASC: '_ID_ASC',
  ORDERID_DESC: 'ORDERID_DESC',
  ORDERID_ASC: 'ORDERID_ASC',
}

module.exports.enumSortFindManyOrderInput = {
  _ID_ASC: '_ID_ASC',
  _ID_DESC: '_ID_DESC',
  ORDERID_ASC: 'ORDERID_ASC',
  ORDERID_DESC: 'ORDERID_DESC',
}

module.exports.enumSortFindManyEmployeeInput = {
  _ID_ASC: '_ID_ASC',
  _ID_DESC: '_ID_DESC',
  EMPLOYEEID_ASC: 'EMPLOYEEID_ASC',
  EMPLOYEEID_DESC: 'EMPLOYEEID_DESC',
  TERRITORYIDS_ASC: 'TERRITORYIDS_ASC',
  TERRITORYIDS_DESC: 'TERRITORYIDS_DESC',
  LASTNAME_ASC: 'LASTNAME_ASC',
  LASTNAME_DESC: 'LASTNAME_DESC',
  LASTNAME__FIRSTNAME_ASC: 'LASTNAME__FIRSTNAME_ASC',
  LASTNAME__FIRSTNAME_DESC: 'LASTNAME__FIRSTNAME_DESC',
}

module.exports.enumSortConnectionProductEnum = {
  _ID_DESC: '_ID_DESC',
  _ID_ASC: '_ID_ASC',
  PRODUCTID_DESC: 'PRODUCTID_DESC',
  PRODUCTID_ASC: 'PRODUCTID_ASC',
  NAME__SUPPLIERID_DESC: 'NAME__SUPPLIERID_DESC',
  NAME__SUPPLIERID_ASC: 'NAME__SUPPLIERID_ASC',
}

module.exports.enumSortFindManyProductInput = {
  _ID_ASC: '_ID_ASC',
  _ID_DESC: '_ID_DESC',
  PRODUCTID_ASC: 'PRODUCTID_ASC',
  PRODUCTID_DESC: 'PRODUCTID_DESC',
  UNITPRICE_ASC: 'UNITPRICE_ASC',
  UNITPRICE_DESC: 'UNITPRICE_DESC',
  NAME_ASC: 'NAME_ASC',
  NAME_DESC: 'NAME_DESC',
  NAME__SUPPLIERID_ASC: 'NAME__SUPPLIERID_ASC',
  NAME__SUPPLIERID_DESC: 'NAME__SUPPLIERID_DESC',
}

module.exports.enumSortFindOneCategoryInput = {
  _ID_ASC: '_ID_ASC',
  _ID_DESC: '_ID_DESC',
  CATEGORYID_ASC: 'CATEGORYID_ASC',
  CATEGORYID_DESC: 'CATEGORYID_DESC',
  NAME_ASC: 'NAME_ASC',
  NAME_DESC: 'NAME_DESC',
}

module.exports.enumSortFindManyCategoryInput = {
  _ID_ASC: '_ID_ASC',
  _ID_DESC: '_ID_DESC',
  CATEGORYID_ASC: 'CATEGORYID_ASC',
  CATEGORYID_DESC: 'CATEGORYID_DESC',
  NAME_ASC: 'NAME_ASC',
  NAME_DESC: 'NAME_DESC',
}

module.exports.enumSortFindOneCustomerInput = {
  _ID_ASC: '_ID_ASC',
  _ID_DESC: '_ID_DESC',
  CUSTOMERID_ASC: 'CUSTOMERID_ASC',
  CUSTOMERID_DESC: 'CUSTOMERID_DESC',
  COMPANYNAME_ASC: 'COMPANYNAME_ASC',
  COMPANYNAME_DESC: 'COMPANYNAME_DESC',
}

module.exports.enumSortFindManyCustomerInput = {
  _ID_ASC: '_ID_ASC',
  _ID_DESC: '_ID_DESC',
  CUSTOMERID_ASC: 'CUSTOMERID_ASC',
  CUSTOMERID_DESC: 'CUSTOMERID_DESC',
  COMPANYNAME_ASC: 'COMPANYNAME_ASC',
  COMPANYNAME_DESC: 'COMPANYNAME_DESC',
}

module.exports.enumSortConnectionCustomerEnum = {
  _ID_DESC: '_ID_DESC',
  _ID_ASC: '_ID_ASC',
  CUSTOMERID_DESC: 'CUSTOMERID_DESC',
  CUSTOMERID_ASC: 'CUSTOMERID_ASC',
  COMPANYNAME_DESC: 'COMPANYNAME_DESC',
  COMPANYNAME_ASC: 'COMPANYNAME_ASC',
}

module.exports.enumSortFindOneEmployeeInput = {
  _ID_ASC: '_ID_ASC',
  _ID_DESC: '_ID_DESC',
  EMPLOYEEID_ASC: 'EMPLOYEEID_ASC',
  EMPLOYEEID_DESC: 'EMPLOYEEID_DESC',
  TERRITORYIDS_ASC: 'TERRITORYIDS_ASC',
  TERRITORYIDS_DESC: 'TERRITORYIDS_DESC',
  LASTNAME_ASC: 'LASTNAME_ASC',
  LASTNAME_DESC: 'LASTNAME_DESC',
  LASTNAME__FIRSTNAME_ASC: 'LASTNAME__FIRSTNAME_ASC',
  LASTNAME__FIRSTNAME_DESC: 'LASTNAME__FIRSTNAME_DESC',
}

module.exports.enumSortFindOneOrderInput = {
  _ID_ASC: '_ID_ASC',
  _ID_DESC: '_ID_DESC',
  ORDERID_ASC: 'ORDERID_ASC',
  ORDERID_DESC: 'ORDERID_DESC',
}

module.exports.enumSortFindOneProductInput = {
  _ID_ASC: '_ID_ASC',
  _ID_DESC: '_ID_DESC',
  PRODUCTID_ASC: 'PRODUCTID_ASC',
  PRODUCTID_DESC: 'PRODUCTID_DESC',
  UNITPRICE_ASC: 'UNITPRICE_ASC',
  UNITPRICE_DESC: 'UNITPRICE_DESC',
  NAME_ASC: 'NAME_ASC',
  NAME_DESC: 'NAME_DESC',
  NAME__SUPPLIERID_ASC: 'NAME__SUPPLIERID_ASC',
  NAME__SUPPLIERID_DESC: 'NAME__SUPPLIERID_DESC',
}

module.exports.enumSortFindOneRegionInput = {
  _ID_ASC: '_ID_ASC',
  _ID_DESC: '_ID_DESC',
  REGIONID_ASC: 'REGIONID_ASC',
  REGIONID_DESC: 'REGIONID_DESC',
}

module.exports.enumSortFindManyRegionInput = {
  _ID_ASC: '_ID_ASC',
  _ID_DESC: '_ID_DESC',
  REGIONID_ASC: 'REGIONID_ASC',
  REGIONID_DESC: 'REGIONID_DESC',
}

module.exports.enumSortFindOneShipperInput = {
  _ID_ASC: '_ID_ASC',
  _ID_DESC: '_ID_DESC',
  SHIPPERID_ASC: 'SHIPPERID_ASC',
  SHIPPERID_DESC: 'SHIPPERID_DESC',
}

module.exports.enumSortFindManyShipperInput = {
  _ID_ASC: '_ID_ASC',
  _ID_DESC: '_ID_DESC',
  SHIPPERID_ASC: 'SHIPPERID_ASC',
  SHIPPERID_DESC: 'SHIPPERID_DESC',
}

module.exports.enumSortFindOneSupplierInput = {
  _ID_ASC: '_ID_ASC',
  _ID_DESC: '_ID_DESC',
  SUPPLIERID_ASC: 'SUPPLIERID_ASC',
  SUPPLIERID_DESC: 'SUPPLIERID_DESC',
  COMPANYNAME_ASC: 'COMPANYNAME_ASC',
  COMPANYNAME_DESC: 'COMPANYNAME_DESC',
}

module.exports.enumSortConnectionSupplierEnum = {
  _ID_DESC: '_ID_DESC',
  _ID_ASC: '_ID_ASC',
  SUPPLIERID_DESC: 'SUPPLIERID_DESC',
  SUPPLIERID_ASC: 'SUPPLIERID_ASC',
  COMPANYNAME_DESC: 'COMPANYNAME_DESC',
  COMPANYNAME_ASC: 'COMPANYNAME_ASC',
}

module.exports.enumSortRemoveOneProductInput = {
  _ID_ASC: '_ID_ASC',
  _ID_DESC: '_ID_DESC',
  PRODUCTID_ASC: 'PRODUCTID_ASC',
  PRODUCTID_DESC: 'PRODUCTID_DESC',
  UNITPRICE_ASC: 'UNITPRICE_ASC',
  UNITPRICE_DESC: 'UNITPRICE_DESC',
  NAME_ASC: 'NAME_ASC',
  NAME_DESC: 'NAME_DESC',
  NAME__SUPPLIERID_ASC: 'NAME__SUPPLIERID_ASC',
  NAME__SUPPLIERID_DESC: 'NAME__SUPPLIERID_DESC',
}

module.exports.enumSortRemoveOneOrderInput = {
  _ID_ASC: '_ID_ASC',
  _ID_DESC: '_ID_DESC',
  ORDERID_ASC: 'ORDERID_ASC',
  ORDERID_DESC: 'ORDERID_DESC',
}

module.exports.generateQueryOp = function (fields) {
  return generateGraphqlOperation('query', typeMap.Query, fields)
}
module.exports.generateMutationOp = function (fields) {
  return generateGraphqlOperation('mutation', typeMap.Mutation, fields)
}
module.exports.generateSubscriptionOp = function (fields) {
  return generateGraphqlOperation('subscription', typeMap.Subscription, fields)
}
module.exports.everything = {
  __scalar: true,
}

var schemaExports = require('./guards.cjs')
for (var k in schemaExports) {
  module.exports[k] = schemaExports[k]
}
