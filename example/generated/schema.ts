export type Scalars = {
    String: string,
    JSON: any,
    Int: number,
    Float: number,
    MongoID: any,
    Boolean: boolean,
    Date: any,
    RegExpAsString: any,
}

export interface ValidationError {
    /** Combined error message from all validators */
    message?: Scalars['String']
    /** List of validator errors */
    errors?: ValidatorError[]
    __typename: 'ValidationError'
}

export type ErrorInterface = (ValidationError | MongoError | RuntimeError) & { __isUnion?: true }

export interface ValidatorError {
    /** Validation error message */
    message?: Scalars['String']
    /** Source of the validation error from the model path */
    path?: Scalars['String']
    /** Field value which occurs the validation error */
    value?: Scalars['JSON']
    /** Input record idx in array which occurs the validation error. This `idx` is useful for createMany operation. For singular operations it always be 0. For *Many operations `idx` represents record index in array received from user. */
    idx: Scalars['Int']
    __typename: 'ValidatorError'
}

export interface MongoError {
    /** MongoDB error message */
    message?: Scalars['String']
    /** MongoDB error code */
    code?: Scalars['Int']
    __typename: 'MongoError'
}

export interface RuntimeError {
    /** Runtime error message */
    message?: Scalars['String']
    __typename: 'RuntimeError'
}

export interface Query {
    /** Data under client context */
    viewer?: Viewer
    __typename: 'Query'
}

export interface Viewer {
    category?: Category
    categoryList: Category[]
    customer?: Customer
    customerPagination?: CustomerPagination
    customerConnection?: CustomerConnection
    employee?: Employee
    employeeList: Employee[]
    employeePagination?: EmployeePagination
    order?: Order
    orderPagination?: OrderPagination
    orderConnection?: OrderConnection
    product?: Product
    productList: Product[]
    productPagination?: ProductPagination
    productConnection?: ProductConnection
    region?: Region
    regionList: Region[]
    shipper?: Shipper
    shipperList: Shipper[]
    supplier?: Supplier
    supplierConnection?: SupplierConnection
    __typename: 'Viewer'
}

export interface Category {
    /** Category unique ID */
    categoryID?: Scalars['Float']
    name?: Scalars['String']
    description?: Scalars['String']
    _id: Scalars['MongoID']
    productConnection?: ProductConnection
    productList: Product[]
    __typename: 'Category'
}


/** A connection to a list of items. */
export interface ProductConnection {
    /** Total object count. */
    count: Scalars['Int']
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** Information to aid in pagination. */
    edges: ProductEdge[]
    __typename: 'ProductConnection'
}


/** Information about pagination in a connection. */
export interface PageInfo {
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor?: Scalars['String']
    /** When paginating forwards, the cursor to continue. */
    endCursor?: Scalars['String']
    __typename: 'PageInfo'
}


/** An edge in a connection. */
export interface ProductEdge {
    /** The item at the end of the edge */
    node: Product
    /** A cursor for use in pagination */
    cursor: Scalars['String']
    __typename: 'ProductEdge'
}

export interface Product {
    /** Unique product id */
    productID?: Scalars['Float']
    name?: Scalars['String']
    supplierID?: Scalars['Float']
    categoryID?: Scalars['Float']
    quantityPerUnit?: Scalars['String']
    unitPrice?: Scalars['Float']
    unitsInStock?: Scalars['Float']
    unitsOnOrder?: Scalars['Float']
    reorderLevel?: Scalars['Float']
    discontinued?: Scalars['Boolean']
    _id: Scalars['MongoID']
    orderConnection?: OrderConnection
    orderList: Order[]
    supplier?: Supplier
    category?: Category
    __typename: 'Product'
}


/** A connection to a list of items. */
export interface OrderConnection {
    /** Total object count. */
    count: Scalars['Int']
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** Information to aid in pagination. */
    edges: OrderEdge[]
    __typename: 'OrderConnection'
}


/** An edge in a connection. */
export interface OrderEdge {
    /** The item at the end of the edge */
    node: Order
    /** A cursor for use in pagination */
    cursor: Scalars['String']
    __typename: 'OrderEdge'
}

export interface Order {
    /** Order unique ID */
    orderID?: Scalars['Float']
    customerID?: Scalars['String']
    employeeID?: Scalars['Float']
    orderDate?: Scalars['Date']
    requiredDate?: Scalars['Date']
    shippedDate?: Scalars['Date']
    shipVia?: Scalars['Float']
    freight?: Scalars['Float']
    shipName?: Scalars['String']
    shipAddress?: CustomerAddress
    /** List of ordered products */
    details?: (OrderDetails | undefined)[]
    _id: Scalars['MongoID']
    customer?: Customer
    employee?: Employee
    shipper?: Shipper
    __typename: 'Order'
}

export interface CustomerAddress {
    street?: Scalars['String']
    city?: Scalars['String']
    region?: Scalars['String']
    postalCode?: Scalars['String']
    country?: Scalars['String']
    phone?: Scalars['String']
    __typename: 'CustomerAddress'
}

export interface OrderDetails {
    productID?: Scalars['Float']
    unitPrice?: Scalars['Float']
    quantity?: Scalars['Float']
    discount?: Scalars['Float']
    product?: Product
    __typename: 'OrderDetails'
}

export interface Customer {
    /** Customer unique ID */
    customerID?: Scalars['String']
    companyName?: Scalars['String']
    contactName?: Scalars['String']
    contactTitle?: Scalars['String']
    address?: CustomerAddress
    _id: Scalars['MongoID']
    orderConnection?: OrderConnection
    orderList: Order[]
    __typename: 'Customer'
}

export type SortConnectionOrderEnum = '_ID_DESC' | '_ID_ASC' | 'ORDERID_DESC' | 'ORDERID_ASC'

export type SortFindManyOrderInput = '_ID_ASC' | '_ID_DESC' | 'ORDERID_ASC' | 'ORDERID_DESC'

export interface Employee {
    /** Category unique ID */
    employeeID?: Scalars['Float']
    lastName?: Scalars['String']
    firstName?: Scalars['String']
    title?: Scalars['String']
    titleOfCourtesy?: Scalars['String']
    birthDate?: Scalars['Date']
    hireDate?: Scalars['Date']
    address?: CustomerAddress
    notes?: Scalars['String']
    /** ID of chief */
    reportsTo?: Scalars['Float']
    /** Attached territory ID from region collection */
    territoryIDs?: (Scalars['Float'] | undefined)[]
    _id: Scalars['MongoID']
    chief?: Employee
    subordinates: Employee[]
    orderConnection?: OrderConnection
    __typename: 'Employee'
}

export type SortFindManyEmployeeInput = '_ID_ASC' | '_ID_DESC' | 'EMPLOYEEID_ASC' | 'EMPLOYEEID_DESC' | 'TERRITORYIDS_ASC' | 'TERRITORYIDS_DESC' | 'LASTNAME_ASC' | 'LASTNAME_DESC' | 'LASTNAME__FIRSTNAME_ASC' | 'LASTNAME__FIRSTNAME_DESC'

export interface Shipper {
    /** Shipper unique ID */
    shipperID?: Scalars['Float']
    companyName?: Scalars['String']
    phone?: Scalars['String']
    _id: Scalars['MongoID']
    orderConnection?: OrderConnection
    __typename: 'Shipper'
}

export interface Supplier {
    /** Supplier unique ID */
    supplierID?: Scalars['Float']
    companyName?: Scalars['String']
    contactName?: Scalars['String']
    contactTitle?: Scalars['String']
    address?: CustomerAddress
    _id: Scalars['MongoID']
    productConnection?: ProductConnection
    __typename: 'Supplier'
}

export type SortConnectionProductEnum = '_ID_DESC' | '_ID_ASC' | 'PRODUCTID_DESC' | 'PRODUCTID_ASC' | 'NAME__SUPPLIERID_DESC' | 'NAME__SUPPLIERID_ASC'

export type SortFindManyProductInput = '_ID_ASC' | '_ID_DESC' | 'PRODUCTID_ASC' | 'PRODUCTID_DESC' | 'UNITPRICE_ASC' | 'UNITPRICE_DESC' | 'NAME_ASC' | 'NAME_DESC' | 'NAME__SUPPLIERID_ASC' | 'NAME__SUPPLIERID_DESC'

export type SortFindOneCategoryInput = '_ID_ASC' | '_ID_DESC' | 'CATEGORYID_ASC' | 'CATEGORYID_DESC' | 'NAME_ASC' | 'NAME_DESC'

export type SortFindManyCategoryInput = '_ID_ASC' | '_ID_DESC' | 'CATEGORYID_ASC' | 'CATEGORYID_DESC' | 'NAME_ASC' | 'NAME_DESC'

export type SortFindOneCustomerInput = '_ID_ASC' | '_ID_DESC' | 'CUSTOMERID_ASC' | 'CUSTOMERID_DESC' | 'COMPANYNAME_ASC' | 'COMPANYNAME_DESC'


/** List of items with pagination. */
export interface CustomerPagination {
    /** Total object count. */
    count?: Scalars['Int']
    /** Array of objects. */
    items?: Customer[]
    /** Information to aid in pagination. */
    pageInfo: PaginationInfo
    __typename: 'CustomerPagination'
}

export interface PaginationInfo {
    currentPage: Scalars['Int']
    perPage: Scalars['Int']
    pageCount?: Scalars['Int']
    itemCount?: Scalars['Int']
    hasNextPage?: Scalars['Boolean']
    hasPreviousPage?: Scalars['Boolean']
    __typename: 'PaginationInfo'
}

export type SortFindManyCustomerInput = '_ID_ASC' | '_ID_DESC' | 'CUSTOMERID_ASC' | 'CUSTOMERID_DESC' | 'COMPANYNAME_ASC' | 'COMPANYNAME_DESC'


/** A connection to a list of items. */
export interface CustomerConnection {
    /** Total object count. */
    count: Scalars['Int']
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** Information to aid in pagination. */
    edges: CustomerEdge[]
    __typename: 'CustomerConnection'
}


/** An edge in a connection. */
export interface CustomerEdge {
    /** The item at the end of the edge */
    node: Customer
    /** A cursor for use in pagination */
    cursor: Scalars['String']
    __typename: 'CustomerEdge'
}

export type SortConnectionCustomerEnum = '_ID_DESC' | '_ID_ASC' | 'CUSTOMERID_DESC' | 'CUSTOMERID_ASC' | 'COMPANYNAME_DESC' | 'COMPANYNAME_ASC'

export type SortFindOneEmployeeInput = '_ID_ASC' | '_ID_DESC' | 'EMPLOYEEID_ASC' | 'EMPLOYEEID_DESC' | 'TERRITORYIDS_ASC' | 'TERRITORYIDS_DESC' | 'LASTNAME_ASC' | 'LASTNAME_DESC' | 'LASTNAME__FIRSTNAME_ASC' | 'LASTNAME__FIRSTNAME_DESC'


/** List of items with pagination. */
export interface EmployeePagination {
    /** Total object count. */
    count?: Scalars['Int']
    /** Array of objects. */
    items?: Employee[]
    /** Information to aid in pagination. */
    pageInfo: PaginationInfo
    __typename: 'EmployeePagination'
}

export type SortFindOneOrderInput = '_ID_ASC' | '_ID_DESC' | 'ORDERID_ASC' | 'ORDERID_DESC'


/** List of items with pagination. */
export interface OrderPagination {
    /** Total object count. */
    count?: Scalars['Int']
    /** Array of objects. */
    items?: Order[]
    /** Information to aid in pagination. */
    pageInfo: PaginationInfo
    __typename: 'OrderPagination'
}

export type SortFindOneProductInput = '_ID_ASC' | '_ID_DESC' | 'PRODUCTID_ASC' | 'PRODUCTID_DESC' | 'UNITPRICE_ASC' | 'UNITPRICE_DESC' | 'NAME_ASC' | 'NAME_DESC' | 'NAME__SUPPLIERID_ASC' | 'NAME__SUPPLIERID_DESC'


/** List of items with pagination. */
export interface ProductPagination {
    /** Total object count. */
    count?: Scalars['Int']
    /** Array of objects. */
    items?: Product[]
    /** Information to aid in pagination. */
    pageInfo: PaginationInfo
    __typename: 'ProductPagination'
}

export interface Region {
    /** Region unique ID */
    regionID?: Scalars['Float']
    name?: Scalars['String']
    territories?: (RegionTerritories | undefined)[]
    _id: Scalars['MongoID']
    employees: Employee[]
    __typename: 'Region'
}

export interface RegionTerritories {
    territoryID?: Scalars['Float']
    name?: Scalars['String']
    __typename: 'RegionTerritories'
}

export type SortFindOneRegionInput = '_ID_ASC' | '_ID_DESC' | 'REGIONID_ASC' | 'REGIONID_DESC'

export type SortFindManyRegionInput = '_ID_ASC' | '_ID_DESC' | 'REGIONID_ASC' | 'REGIONID_DESC'

export type SortFindOneShipperInput = '_ID_ASC' | '_ID_DESC' | 'SHIPPERID_ASC' | 'SHIPPERID_DESC'

export type SortFindManyShipperInput = '_ID_ASC' | '_ID_DESC' | 'SHIPPERID_ASC' | 'SHIPPERID_DESC'

export type SortFindOneSupplierInput = '_ID_ASC' | '_ID_DESC' | 'SUPPLIERID_ASC' | 'SUPPLIERID_DESC' | 'COMPANYNAME_ASC' | 'COMPANYNAME_DESC'


/** A connection to a list of items. */
export interface SupplierConnection {
    /** Total object count. */
    count: Scalars['Int']
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** Information to aid in pagination. */
    edges: SupplierEdge[]
    __typename: 'SupplierConnection'
}


/** An edge in a connection. */
export interface SupplierEdge {
    /** The item at the end of the edge */
    node: Supplier
    /** A cursor for use in pagination */
    cursor: Scalars['String']
    __typename: 'SupplierEdge'
}

export type SortConnectionSupplierEnum = '_ID_DESC' | '_ID_ASC' | 'SUPPLIERID_DESC' | 'SUPPLIERID_ASC' | 'COMPANYNAME_DESC' | 'COMPANYNAME_ASC'

export interface Mutation {
    /** Create one document with mongoose defaults, setters, hooks and validation */
    createProduct?: CreateOneProductPayload
    /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
    updateProduct?: UpdateByIdProductPayload
    /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
    removeProduct?: RemoveOneProductPayload
    /** Create one document with mongoose defaults, setters, hooks and validation */
    createOrder?: CreateOneOrderPayload
    /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
    updateOrder?: UpdateByIdOrderPayload
    /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
    removeOrder?: RemoveOneOrderPayload
    /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
    updateEmployee?: UpdateByIdEmployeePayload
    /** Remove all data and seed DB from scratch. Anyway data automatically reloaded every 30 minutes. */
    resetData?: Scalars['String']
    __typename: 'Mutation'
}

export interface CreateOneProductPayload {
    /** Document ID */
    recordId?: Scalars['MongoID']
    /** Created document */
    record?: Product
    /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
    error?: ErrorInterface
    query?: Query
    __typename: 'CreateOneProductPayload'
}

export interface UpdateByIdProductPayload {
    /** Document ID */
    recordId?: Scalars['MongoID']
    /** Updated document */
    record?: Product
    /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
    error?: ErrorInterface
    query?: Query
    __typename: 'UpdateByIdProductPayload'
}

export interface RemoveOneProductPayload {
    /** Document ID */
    recordId?: Scalars['MongoID']
    /** Removed document */
    record?: Product
    /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
    error?: ErrorInterface
    query?: Query
    __typename: 'RemoveOneProductPayload'
}

export type SortRemoveOneProductInput = '_ID_ASC' | '_ID_DESC' | 'PRODUCTID_ASC' | 'PRODUCTID_DESC' | 'UNITPRICE_ASC' | 'UNITPRICE_DESC' | 'NAME_ASC' | 'NAME_DESC' | 'NAME__SUPPLIERID_ASC' | 'NAME__SUPPLIERID_DESC'

export interface CreateOneOrderPayload {
    /** Document ID */
    recordId?: Scalars['MongoID']
    /** Created document */
    record?: Order
    /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
    error?: ErrorInterface
    query?: Query
    __typename: 'CreateOneOrderPayload'
}

export interface UpdateByIdOrderPayload {
    /** Document ID */
    recordId?: Scalars['MongoID']
    /** Updated document */
    record?: Order
    /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
    error?: ErrorInterface
    query?: Query
    __typename: 'UpdateByIdOrderPayload'
}

export interface RemoveOneOrderPayload {
    /** Document ID */
    recordId?: Scalars['MongoID']
    /** Removed document */
    record?: Order
    /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
    error?: ErrorInterface
    query?: Query
    __typename: 'RemoveOneOrderPayload'
}

export type SortRemoveOneOrderInput = '_ID_ASC' | '_ID_DESC' | 'ORDERID_ASC' | 'ORDERID_DESC'

export interface UpdateByIdEmployeePayload {
    /** Document ID */
    recordId?: Scalars['MongoID']
    /** Updated document */
    record?: Employee
    /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
    error?: ErrorInterface
    query?: Query
    __typename: 'UpdateByIdEmployeePayload'
}

export interface Subscription {
    orderCreated?: Order
    orderUpdated?: Order
    orderRemoved?: Scalars['MongoID']
    productCreated?: Product
    productUpdated?: Product
    productRemoved?: Scalars['MongoID']
    employeeUpdated?: Employee
    __typename: 'Subscription'
}

export interface ValidationErrorRequest{
    /** Combined error message from all validators */
    message?: boolean | number
    /** List of validator errors */
    errors?: ValidatorErrorRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ErrorInterfaceRequest{
    /** Generic error message */
    message?: boolean | number
    on_ValidationError?: ValidationErrorRequest
    on_MongoError?: MongoErrorRequest
    on_RuntimeError?: RuntimeErrorRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ValidatorErrorRequest{
    /** Validation error message */
    message?: boolean | number
    /** Source of the validation error from the model path */
    path?: boolean | number
    /** Field value which occurs the validation error */
    value?: boolean | number
    /** Input record idx in array which occurs the validation error. This `idx` is useful for createMany operation. For singular operations it always be 0. For *Many operations `idx` represents record index in array received from user. */
    idx?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface MongoErrorRequest{
    /** MongoDB error message */
    message?: boolean | number
    /** MongoDB error code */
    code?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RuntimeErrorRequest{
    /** Runtime error message */
    message?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface QueryRequest{
    /** Data under client context */
    viewer?: ViewerRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ViewerRequest{
    category?: [{
    /** Filter by fields */
    filter?: (FilterFindOneCategoryInput | null),skip?: (Scalars['Int'] | null),sort?: (SortFindOneCategoryInput | null)},CategoryRequest] | CategoryRequest
    categoryList?: [{
    /** Filter by fields */
    filter?: (FilterFindManyCategoryInput | null),skip?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null),sort?: (SortFindManyCategoryInput | null)},CategoryRequest] | CategoryRequest
    customer?: [{
    /** Filter by fields */
    filter?: (FilterFindOneCustomerInput | null),skip?: (Scalars['Int'] | null),sort?: (SortFindOneCustomerInput | null)},CustomerRequest] | CustomerRequest
    customerPagination?: [{
    /** Page number for displaying */
    page?: (Scalars['Int'] | null),perPage?: (Scalars['Int'] | null),
    /** Filter by fields */
    filter?: (FilterFindManyCustomerInput | null),sort?: (SortFindManyCustomerInput | null)},CustomerPaginationRequest] | CustomerPaginationRequest
    customerConnection?: [{
    /** Forward pagination argument for returning at most first edges */
    first?: (Scalars['Int'] | null),
    /** Forward pagination argument for returning at most first edges */
    after?: (Scalars['String'] | null),
    /** Backward pagination argument for returning at most last edges */
    last?: (Scalars['Int'] | null),
    /** Backward pagination argument for returning at most last edges */
    before?: (Scalars['String'] | null),
    /** Filter by fields */
    filter?: (FilterFindManyCustomerInput | null),
    /** Sort argument for data ordering */
    sort?: (SortConnectionCustomerEnum | null)},CustomerConnectionRequest] | CustomerConnectionRequest
    employee?: [{
    /** Filter by fields */
    filter?: (FilterFindOneEmployeeInput | null),skip?: (Scalars['Int'] | null),sort?: (SortFindOneEmployeeInput | null)},EmployeeRequest] | EmployeeRequest
    employeeList?: [{
    /** Filter by fields */
    filter?: (FilterFindManyEmployeeInput | null),skip?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null),sort?: (SortFindManyEmployeeInput | null)},EmployeeRequest] | EmployeeRequest
    employeePagination?: [{
    /** Page number for displaying */
    page?: (Scalars['Int'] | null),perPage?: (Scalars['Int'] | null),
    /** Filter by fields */
    filter?: (FilterFindManyEmployeeInput | null),sort?: (SortFindManyEmployeeInput | null)},EmployeePaginationRequest] | EmployeePaginationRequest
    order?: [{
    /** Filter by fields */
    filter?: (FilterFindOneOrderInput | null),skip?: (Scalars['Int'] | null),sort?: (SortFindOneOrderInput | null)},OrderRequest] | OrderRequest
    orderPagination?: [{
    /** Page number for displaying */
    page?: (Scalars['Int'] | null),perPage?: (Scalars['Int'] | null),
    /** Filter by fields */
    filter?: (FilterFindManyOrderInput | null),sort?: (SortFindManyOrderInput | null)},OrderPaginationRequest] | OrderPaginationRequest
    orderConnection?: [{
    /** Forward pagination argument for returning at most first edges */
    first?: (Scalars['Int'] | null),
    /** Forward pagination argument for returning at most first edges */
    after?: (Scalars['String'] | null),
    /** Backward pagination argument for returning at most last edges */
    last?: (Scalars['Int'] | null),
    /** Backward pagination argument for returning at most last edges */
    before?: (Scalars['String'] | null),
    /** Filter by fields */
    filter?: (FilterFindManyOrderInput | null),
    /** Sort argument for data ordering */
    sort?: (SortConnectionOrderEnum | null)},OrderConnectionRequest] | OrderConnectionRequest
    product?: [{
    /** Filter by fields */
    filter?: (FilterFindOneProductInput | null),skip?: (Scalars['Int'] | null),sort?: (SortFindOneProductInput | null)},ProductRequest] | ProductRequest
    productList?: [{
    /** Filter by fields */
    filter?: (FilterFindManyProductInput | null),skip?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null),sort?: (SortFindManyProductInput | null)},ProductRequest] | ProductRequest
    productPagination?: [{
    /** Page number for displaying */
    page?: (Scalars['Int'] | null),perPage?: (Scalars['Int'] | null),
    /** Filter by fields */
    filter?: (FilterFindManyProductInput | null),sort?: (SortFindManyProductInput | null)},ProductPaginationRequest] | ProductPaginationRequest
    productConnection?: [{
    /** Forward pagination argument for returning at most first edges */
    first?: (Scalars['Int'] | null),
    /** Forward pagination argument for returning at most first edges */
    after?: (Scalars['String'] | null),
    /** Backward pagination argument for returning at most last edges */
    last?: (Scalars['Int'] | null),
    /** Backward pagination argument for returning at most last edges */
    before?: (Scalars['String'] | null),
    /** Filter by fields */
    filter?: (FilterFindManyProductInput | null),
    /** Sort argument for data ordering */
    sort?: (SortConnectionProductEnum | null)},ProductConnectionRequest] | ProductConnectionRequest
    region?: [{
    /** Filter by fields */
    filter?: (FilterFindOneRegionInput | null),skip?: (Scalars['Int'] | null),sort?: (SortFindOneRegionInput | null)},RegionRequest] | RegionRequest
    regionList?: [{
    /** Filter by fields */
    filter?: (FilterFindManyRegionInput | null),skip?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null),sort?: (SortFindManyRegionInput | null)},RegionRequest] | RegionRequest
    shipper?: [{
    /** Filter by fields */
    filter?: (FilterFindOneShipperInput | null),skip?: (Scalars['Int'] | null),sort?: (SortFindOneShipperInput | null)},ShipperRequest] | ShipperRequest
    shipperList?: [{
    /** Filter by fields */
    filter?: (FilterFindManyShipperInput | null),skip?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null),sort?: (SortFindManyShipperInput | null)},ShipperRequest] | ShipperRequest
    supplier?: [{
    /** Filter by fields */
    filter?: (FilterFindOneSupplierInput | null),skip?: (Scalars['Int'] | null),sort?: (SortFindOneSupplierInput | null)},SupplierRequest] | SupplierRequest
    supplierConnection?: [{
    /** Forward pagination argument for returning at most first edges */
    first?: (Scalars['Int'] | null),
    /** Forward pagination argument for returning at most first edges */
    after?: (Scalars['String'] | null),
    /** Backward pagination argument for returning at most last edges */
    last?: (Scalars['Int'] | null),
    /** Backward pagination argument for returning at most last edges */
    before?: (Scalars['String'] | null),
    /** Filter by fields */
    filter?: (FilterFindManySupplierInput | null),
    /** Sort argument for data ordering */
    sort?: (SortConnectionSupplierEnum | null)},SupplierConnectionRequest] | SupplierConnectionRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CategoryRequest{
    /** Category unique ID */
    categoryID?: boolean | number
    name?: boolean | number
    description?: boolean | number
    _id?: boolean | number
    productConnection?: [{
    /** Forward pagination argument for returning at most first edges */
    first?: (Scalars['Int'] | null),
    /** Forward pagination argument for returning at most first edges */
    after?: (Scalars['String'] | null),
    /** Backward pagination argument for returning at most last edges */
    last?: (Scalars['Int'] | null),
    /** Backward pagination argument for returning at most last edges */
    before?: (Scalars['String'] | null),
    /** Sort argument for data ordering */
    sort?: (SortConnectionProductEnum | null)},ProductConnectionRequest] | ProductConnectionRequest
    productList?: [{skip?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null),sort?: (SortFindManyProductInput | null)},ProductRequest] | ProductRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A connection to a list of items. */
export interface ProductConnectionRequest{
    /** Total object count. */
    count?: boolean | number
    /** Information to aid in pagination. */
    pageInfo?: PageInfoRequest
    /** Information to aid in pagination. */
    edges?: ProductEdgeRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Information about pagination in a connection. */
export interface PageInfoRequest{
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection. */
export interface ProductEdgeRequest{
    /** The item at the end of the edge */
    node?: ProductRequest
    /** A cursor for use in pagination */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ProductRequest{
    /** Unique product id */
    productID?: boolean | number
    name?: boolean | number
    supplierID?: boolean | number
    categoryID?: boolean | number
    quantityPerUnit?: boolean | number
    unitPrice?: boolean | number
    unitsInStock?: boolean | number
    unitsOnOrder?: boolean | number
    reorderLevel?: boolean | number
    discontinued?: boolean | number
    _id?: boolean | number
    orderConnection?: [{
    /** Forward pagination argument for returning at most first edges */
    first?: (Scalars['Int'] | null),
    /** Forward pagination argument for returning at most first edges */
    after?: (Scalars['String'] | null),
    /** Backward pagination argument for returning at most last edges */
    last?: (Scalars['Int'] | null),
    /** Backward pagination argument for returning at most last edges */
    before?: (Scalars['String'] | null),
    /** Sort argument for data ordering */
    sort?: (SortConnectionOrderEnum | null)},OrderConnectionRequest] | OrderConnectionRequest
    orderList?: [{skip?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null),sort?: (SortFindManyOrderInput | null)},OrderRequest] | OrderRequest
    supplier?: SupplierRequest
    category?: CategoryRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A connection to a list of items. */
export interface OrderConnectionRequest{
    /** Total object count. */
    count?: boolean | number
    /** Information to aid in pagination. */
    pageInfo?: PageInfoRequest
    /** Information to aid in pagination. */
    edges?: OrderEdgeRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection. */
export interface OrderEdgeRequest{
    /** The item at the end of the edge */
    node?: OrderRequest
    /** A cursor for use in pagination */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrderRequest{
    /** Order unique ID */
    orderID?: boolean | number
    customerID?: boolean | number
    employeeID?: boolean | number
    orderDate?: boolean | number
    requiredDate?: boolean | number
    shippedDate?: boolean | number
    shipVia?: boolean | number
    freight?: boolean | number
    shipName?: boolean | number
    shipAddress?: CustomerAddressRequest
    /** List of ordered products */
    details?: OrderDetailsRequest
    _id?: boolean | number
    customer?: CustomerRequest
    employee?: EmployeeRequest
    shipper?: ShipperRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomerAddressRequest{
    street?: boolean | number
    city?: boolean | number
    region?: boolean | number
    postalCode?: boolean | number
    country?: boolean | number
    phone?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface OrderDetailsRequest{
    productID?: boolean | number
    unitPrice?: boolean | number
    quantity?: boolean | number
    discount?: boolean | number
    product?: ProductRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CustomerRequest{
    /** Customer unique ID */
    customerID?: boolean | number
    companyName?: boolean | number
    contactName?: boolean | number
    contactTitle?: boolean | number
    address?: CustomerAddressRequest
    _id?: boolean | number
    orderConnection?: [{
    /** Forward pagination argument for returning at most first edges */
    first?: (Scalars['Int'] | null),
    /** Forward pagination argument for returning at most first edges */
    after?: (Scalars['String'] | null),
    /** Backward pagination argument for returning at most last edges */
    last?: (Scalars['Int'] | null),
    /** Backward pagination argument for returning at most last edges */
    before?: (Scalars['String'] | null),
    /** Sort argument for data ordering */
    sort?: (SortConnectionOrderEnum | null)},OrderConnectionRequest] | OrderConnectionRequest
    orderList?: [{skip?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null),sort?: (SortFindManyOrderInput | null)},OrderRequest] | OrderRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface EmployeeRequest{
    /** Category unique ID */
    employeeID?: boolean | number
    lastName?: boolean | number
    firstName?: boolean | number
    title?: boolean | number
    titleOfCourtesy?: boolean | number
    birthDate?: boolean | number
    hireDate?: boolean | number
    address?: CustomerAddressRequest
    notes?: boolean | number
    /** ID of chief */
    reportsTo?: boolean | number
    /** Attached territory ID from region collection */
    territoryIDs?: boolean | number
    _id?: boolean | number
    chief?: EmployeeRequest
    subordinates?: [{skip?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null),sort?: (SortFindManyEmployeeInput | null)},EmployeeRequest] | EmployeeRequest
    orderConnection?: [{
    /** Forward pagination argument for returning at most first edges */
    first?: (Scalars['Int'] | null),
    /** Forward pagination argument for returning at most first edges */
    after?: (Scalars['String'] | null),
    /** Backward pagination argument for returning at most last edges */
    last?: (Scalars['Int'] | null),
    /** Backward pagination argument for returning at most last edges */
    before?: (Scalars['String'] | null),
    /** Sort argument for data ordering */
    sort?: (SortConnectionOrderEnum | null)},OrderConnectionRequest] | OrderConnectionRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ShipperRequest{
    /** Shipper unique ID */
    shipperID?: boolean | number
    companyName?: boolean | number
    phone?: boolean | number
    _id?: boolean | number
    orderConnection?: [{
    /** Forward pagination argument for returning at most first edges */
    first?: (Scalars['Int'] | null),
    /** Forward pagination argument for returning at most first edges */
    after?: (Scalars['String'] | null),
    /** Backward pagination argument for returning at most last edges */
    last?: (Scalars['Int'] | null),
    /** Backward pagination argument for returning at most last edges */
    before?: (Scalars['String'] | null),
    /** Sort argument for data ordering */
    sort?: (SortConnectionOrderEnum | null)},OrderConnectionRequest] | OrderConnectionRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface SupplierRequest{
    /** Supplier unique ID */
    supplierID?: boolean | number
    companyName?: boolean | number
    contactName?: boolean | number
    contactTitle?: boolean | number
    address?: CustomerAddressRequest
    _id?: boolean | number
    productConnection?: [{
    /** Forward pagination argument for returning at most first edges */
    first?: (Scalars['Int'] | null),
    /** Forward pagination argument for returning at most first edges */
    after?: (Scalars['String'] | null),
    /** Backward pagination argument for returning at most last edges */
    last?: (Scalars['Int'] | null),
    /** Backward pagination argument for returning at most last edges */
    before?: (Scalars['String'] | null),
    /** Sort argument for data ordering */
    sort?: (SortConnectionProductEnum | null)},ProductConnectionRequest] | ProductConnectionRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FilterFindOneCategoryInput {
/** Category unique ID */
categoryID?: (Scalars['Float'] | null),name?: (Scalars['String'] | null),description?: (Scalars['String'] | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterFindOneCategoryOperatorsInput | null),OR?: (FilterFindOneCategoryInput[] | null),AND?: (FilterFindOneCategoryInput[] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindOneCategoryOperatorsInput {categoryID?: (FilterFindOneCategoryCategoryIDOperatorsInput | null),name?: (FilterFindOneCategoryNameOperatorsInput | null),_id?: (FilterFindOneCategory_idOperatorsInput | null)}

export interface FilterFindOneCategoryCategoryIDOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneCategoryNameOperatorsInput {gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),ne?: (Scalars['String'] | null),in?: ((Scalars['String'] | null)[] | null),nin?: ((Scalars['String'] | null)[] | null),regex?: (Scalars['RegExpAsString'] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneCategory_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyCategoryInput {
/** Category unique ID */
categoryID?: (Scalars['Float'] | null),name?: (Scalars['String'] | null),description?: (Scalars['String'] | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterFindManyCategoryOperatorsInput | null),OR?: (FilterFindManyCategoryInput[] | null),AND?: (FilterFindManyCategoryInput[] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManyCategoryOperatorsInput {categoryID?: (FilterFindManyCategoryCategoryIDOperatorsInput | null),name?: (FilterFindManyCategoryNameOperatorsInput | null),_id?: (FilterFindManyCategory_idOperatorsInput | null)}

export interface FilterFindManyCategoryCategoryIDOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyCategoryNameOperatorsInput {gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),ne?: (Scalars['String'] | null),in?: ((Scalars['String'] | null)[] | null),nin?: ((Scalars['String'] | null)[] | null),regex?: (Scalars['RegExpAsString'] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyCategory_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneCustomerInput {
/** Customer unique ID */
customerID?: (Scalars['String'] | null),companyName?: (Scalars['String'] | null),contactName?: (Scalars['String'] | null),contactTitle?: (Scalars['String'] | null),address?: (FilterFindOneCustomerAddressInput | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterFindOneCustomerOperatorsInput | null),OR?: (FilterFindOneCustomerInput[] | null),AND?: (FilterFindOneCustomerInput[] | null)}

export interface FilterFindOneCustomerAddressInput {street?: (Scalars['String'] | null),city?: (Scalars['String'] | null),region?: (Scalars['String'] | null),postalCode?: (Scalars['String'] | null),country?: (Scalars['String'] | null),phone?: (Scalars['String'] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindOneCustomerOperatorsInput {customerID?: (FilterFindOneCustomerCustomerIDOperatorsInput | null),companyName?: (FilterFindOneCustomerCompanyNameOperatorsInput | null),_id?: (FilterFindOneCustomer_idOperatorsInput | null)}

export interface FilterFindOneCustomerCustomerIDOperatorsInput {gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),ne?: (Scalars['String'] | null),in?: ((Scalars['String'] | null)[] | null),nin?: ((Scalars['String'] | null)[] | null),regex?: (Scalars['RegExpAsString'] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneCustomerCompanyNameOperatorsInput {gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),ne?: (Scalars['String'] | null),in?: ((Scalars['String'] | null)[] | null),nin?: ((Scalars['String'] | null)[] | null),regex?: (Scalars['RegExpAsString'] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneCustomer_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}


/** List of items with pagination. */
export interface CustomerPaginationRequest{
    /** Total object count. */
    count?: boolean | number
    /** Array of objects. */
    items?: CustomerRequest
    /** Information to aid in pagination. */
    pageInfo?: PaginationInfoRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PaginationInfoRequest{
    currentPage?: boolean | number
    perPage?: boolean | number
    pageCount?: boolean | number
    itemCount?: boolean | number
    hasNextPage?: boolean | number
    hasPreviousPage?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FilterFindManyCustomerInput {
/** Customer unique ID */
customerID?: (Scalars['String'] | null),companyName?: (Scalars['String'] | null),contactName?: (Scalars['String'] | null),contactTitle?: (Scalars['String'] | null),address?: (FilterFindManyCustomerAddressInput | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterFindManyCustomerOperatorsInput | null),OR?: (FilterFindManyCustomerInput[] | null),AND?: (FilterFindManyCustomerInput[] | null)}

export interface FilterFindManyCustomerAddressInput {street?: (Scalars['String'] | null),city?: (Scalars['String'] | null),region?: (Scalars['String'] | null),postalCode?: (Scalars['String'] | null),country?: (Scalars['String'] | null),phone?: (Scalars['String'] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManyCustomerOperatorsInput {customerID?: (FilterFindManyCustomerCustomerIDOperatorsInput | null),companyName?: (FilterFindManyCustomerCompanyNameOperatorsInput | null),_id?: (FilterFindManyCustomer_idOperatorsInput | null)}

export interface FilterFindManyCustomerCustomerIDOperatorsInput {gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),ne?: (Scalars['String'] | null),in?: ((Scalars['String'] | null)[] | null),nin?: ((Scalars['String'] | null)[] | null),regex?: (Scalars['RegExpAsString'] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyCustomerCompanyNameOperatorsInput {gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),ne?: (Scalars['String'] | null),in?: ((Scalars['String'] | null)[] | null),nin?: ((Scalars['String'] | null)[] | null),regex?: (Scalars['RegExpAsString'] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyCustomer_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}


/** A connection to a list of items. */
export interface CustomerConnectionRequest{
    /** Total object count. */
    count?: boolean | number
    /** Information to aid in pagination. */
    pageInfo?: PageInfoRequest
    /** Information to aid in pagination. */
    edges?: CustomerEdgeRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection. */
export interface CustomerEdgeRequest{
    /** The item at the end of the edge */
    node?: CustomerRequest
    /** A cursor for use in pagination */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FilterFindOneEmployeeInput {
/** Category unique ID */
employeeID?: (Scalars['Float'] | null),lastName?: (Scalars['String'] | null),firstName?: (Scalars['String'] | null),title?: (Scalars['String'] | null),titleOfCourtesy?: (Scalars['String'] | null),birthDate?: (Scalars['Date'] | null),hireDate?: (Scalars['Date'] | null),address?: (FilterFindOneCustomerAddressInput | null),notes?: (Scalars['String'] | null),
/** ID of chief */
reportsTo?: (Scalars['Float'] | null),
/** Attached territory ID from region collection */
territoryIDs?: ((Scalars['Float'] | null)[] | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterFindOneEmployeeOperatorsInput | null),OR?: (FilterFindOneEmployeeInput[] | null),AND?: (FilterFindOneEmployeeInput[] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindOneEmployeeOperatorsInput {employeeID?: (FilterFindOneEmployeeEmployeeIDOperatorsInput | null),lastName?: (FilterFindOneEmployeeLastNameOperatorsInput | null),territoryIDs?: (FilterFindOneEmployeeTerritoryIDsOperatorsInput | null),_id?: (FilterFindOneEmployee_idOperatorsInput | null)}

export interface FilterFindOneEmployeeEmployeeIDOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneEmployeeLastNameOperatorsInput {gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),ne?: (Scalars['String'] | null),in?: ((Scalars['String'] | null)[] | null),nin?: ((Scalars['String'] | null)[] | null),regex?: (Scalars['RegExpAsString'] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneEmployeeTerritoryIDsOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneEmployee_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyEmployeeInput {
/** Category unique ID */
employeeID?: (Scalars['Float'] | null),lastName?: (Scalars['String'] | null),firstName?: (Scalars['String'] | null),title?: (Scalars['String'] | null),titleOfCourtesy?: (Scalars['String'] | null),birthDate?: (Scalars['Date'] | null),hireDate?: (Scalars['Date'] | null),address?: (FilterFindManyCustomerAddressInput | null),notes?: (Scalars['String'] | null),
/** ID of chief */
reportsTo?: (Scalars['Float'] | null),
/** Attached territory ID from region collection */
territoryIDs?: ((Scalars['Float'] | null)[] | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterFindManyEmployeeOperatorsInput | null),OR?: (FilterFindManyEmployeeInput[] | null),AND?: (FilterFindManyEmployeeInput[] | null),
/** Fulltext search with mongodb stemming and weights */
fullTextSearch?: (Scalars['String'] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManyEmployeeOperatorsInput {employeeID?: (FilterFindManyEmployeeEmployeeIDOperatorsInput | null),lastName?: (FilterFindManyEmployeeLastNameOperatorsInput | null),territoryIDs?: (FilterFindManyEmployeeTerritoryIDsOperatorsInput | null),_id?: (FilterFindManyEmployee_idOperatorsInput | null)}

export interface FilterFindManyEmployeeEmployeeIDOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyEmployeeLastNameOperatorsInput {gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),ne?: (Scalars['String'] | null),in?: ((Scalars['String'] | null)[] | null),nin?: ((Scalars['String'] | null)[] | null),regex?: (Scalars['RegExpAsString'] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyEmployeeTerritoryIDsOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyEmployee_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}


/** List of items with pagination. */
export interface EmployeePaginationRequest{
    /** Total object count. */
    count?: boolean | number
    /** Array of objects. */
    items?: EmployeeRequest
    /** Information to aid in pagination. */
    pageInfo?: PaginationInfoRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FilterFindOneOrderInput {
/** Order unique ID */
orderID?: (Scalars['Float'] | null),customerID?: (Scalars['String'] | null),employeeID?: (Scalars['Float'] | null),orderDate?: (Scalars['Date'] | null),requiredDate?: (Scalars['Date'] | null),shippedDate?: (Scalars['Date'] | null),shipVia?: (Scalars['Float'] | null),freight?: (Scalars['Float'] | null),shipName?: (Scalars['String'] | null),shipAddress?: (FilterFindOneCustomerAddressInput | null),
/** List of ordered products */
details?: ((FilterFindOneOrderDetailsInput | null)[] | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterFindOneOrderOperatorsInput | null),OR?: (FilterFindOneOrderInput[] | null),AND?: (FilterFindOneOrderInput[] | null)}

export interface FilterFindOneOrderDetailsInput {productID?: (Scalars['Float'] | null),unitPrice?: (Scalars['Float'] | null),quantity?: (Scalars['Float'] | null),discount?: (Scalars['Float'] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindOneOrderOperatorsInput {orderID?: (FilterFindOneOrderOrderIDOperatorsInput | null),_id?: (FilterFindOneOrder_idOperatorsInput | null)}

export interface FilterFindOneOrderOrderIDOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneOrder_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}


/** List of items with pagination. */
export interface OrderPaginationRequest{
    /** Total object count. */
    count?: boolean | number
    /** Array of objects. */
    items?: OrderRequest
    /** Information to aid in pagination. */
    pageInfo?: PaginationInfoRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FilterFindManyOrderInput {
/** Order unique ID */
orderID?: (Scalars['Float'] | null),customerID?: (Scalars['String'] | null),employeeID?: (Scalars['Float'] | null),orderDate?: (Scalars['Date'] | null),requiredDate?: (Scalars['Date'] | null),shippedDate?: (Scalars['Date'] | null),shipVia?: (Scalars['Float'] | null),freight?: (Scalars['Float'] | null),shipName?: (Scalars['String'] | null),shipAddress?: (FilterFindManyCustomerAddressInput | null),
/** List of ordered products */
details?: ((FilterFindManyOrderDetailsInput | null)[] | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterFindManyOrderOperatorsInput | null),OR?: (FilterFindManyOrderInput[] | null),AND?: (FilterFindManyOrderInput[] | null)}

export interface FilterFindManyOrderDetailsInput {productID?: (Scalars['Float'] | null),unitPrice?: (Scalars['Float'] | null),quantity?: (Scalars['Float'] | null),discount?: (Scalars['Float'] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManyOrderOperatorsInput {orderID?: (FilterFindManyOrderOrderIDOperatorsInput | null),_id?: (FilterFindManyOrder_idOperatorsInput | null)}

export interface FilterFindManyOrderOrderIDOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyOrder_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneProductInput {
/** Unique product id */
productID?: (Scalars['Float'] | null),name?: (Scalars['String'] | null),supplierID?: (Scalars['Float'] | null),categoryID?: (Scalars['Float'] | null),quantityPerUnit?: (Scalars['String'] | null),unitPrice?: (Scalars['Float'] | null),unitsInStock?: (Scalars['Float'] | null),unitsOnOrder?: (Scalars['Float'] | null),reorderLevel?: (Scalars['Float'] | null),discontinued?: (Scalars['Boolean'] | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterFindOneProductOperatorsInput | null),OR?: (FilterFindOneProductInput[] | null),AND?: (FilterFindOneProductInput[] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindOneProductOperatorsInput {productID?: (FilterFindOneProductProductIDOperatorsInput | null),name?: (FilterFindOneProductNameOperatorsInput | null),unitPrice?: (FilterFindOneProductUnitPriceOperatorsInput | null),_id?: (FilterFindOneProduct_idOperatorsInput | null)}

export interface FilterFindOneProductProductIDOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneProductNameOperatorsInput {gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),ne?: (Scalars['String'] | null),in?: ((Scalars['String'] | null)[] | null),nin?: ((Scalars['String'] | null)[] | null),regex?: (Scalars['RegExpAsString'] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneProductUnitPriceOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneProduct_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyProductInput {
/** Unique product id */
productID?: (Scalars['Float'] | null),name?: (Scalars['String'] | null),supplierID?: (Scalars['Float'] | null),categoryID?: (Scalars['Float'] | null),quantityPerUnit?: (Scalars['String'] | null),unitPrice?: (Scalars['Float'] | null),unitsInStock?: (Scalars['Float'] | null),unitsOnOrder?: (Scalars['Float'] | null),reorderLevel?: (Scalars['Float'] | null),discontinued?: (Scalars['Boolean'] | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterFindManyProductOperatorsInput | null),OR?: (FilterFindManyProductInput[] | null),AND?: (FilterFindManyProductInput[] | null),
/** Search by regExp */
nameRegexp?: (Scalars['String'] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManyProductOperatorsInput {productID?: (FilterFindManyProductProductIDOperatorsInput | null),name?: (FilterFindManyProductNameOperatorsInput | null),unitPrice?: (FilterFindManyProductUnitPriceOperatorsInput | null),_id?: (FilterFindManyProduct_idOperatorsInput | null)}

export interface FilterFindManyProductProductIDOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyProductNameOperatorsInput {gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),ne?: (Scalars['String'] | null),in?: ((Scalars['String'] | null)[] | null),nin?: ((Scalars['String'] | null)[] | null),regex?: (Scalars['RegExpAsString'] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyProductUnitPriceOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyProduct_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}


/** List of items with pagination. */
export interface ProductPaginationRequest{
    /** Total object count. */
    count?: boolean | number
    /** Array of objects. */
    items?: ProductRequest
    /** Information to aid in pagination. */
    pageInfo?: PaginationInfoRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RegionRequest{
    /** Region unique ID */
    regionID?: boolean | number
    name?: boolean | number
    territories?: RegionTerritoriesRequest
    _id?: boolean | number
    employees?: [{skip?: (Scalars['Int'] | null),limit?: (Scalars['Int'] | null),sort?: (SortFindManyEmployeeInput | null)},EmployeeRequest] | EmployeeRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface RegionTerritoriesRequest{
    territoryID?: boolean | number
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FilterFindOneRegionInput {
/** Region unique ID */
regionID?: (Scalars['Float'] | null),name?: (Scalars['String'] | null),territories?: ((FilterFindOneRegionTerritoriesInput | null)[] | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterFindOneRegionOperatorsInput | null),OR?: (FilterFindOneRegionInput[] | null),AND?: (FilterFindOneRegionInput[] | null)}

export interface FilterFindOneRegionTerritoriesInput {territoryID?: (Scalars['Float'] | null),name?: (Scalars['String'] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindOneRegionOperatorsInput {regionID?: (FilterFindOneRegionRegionIDOperatorsInput | null),_id?: (FilterFindOneRegion_idOperatorsInput | null)}

export interface FilterFindOneRegionRegionIDOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneRegion_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyRegionInput {
/** Region unique ID */
regionID?: (Scalars['Float'] | null),name?: (Scalars['String'] | null),territories?: ((FilterFindManyRegionTerritoriesInput | null)[] | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterFindManyRegionOperatorsInput | null),OR?: (FilterFindManyRegionInput[] | null),AND?: (FilterFindManyRegionInput[] | null)}

export interface FilterFindManyRegionTerritoriesInput {territoryID?: (Scalars['Float'] | null),name?: (Scalars['String'] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManyRegionOperatorsInput {regionID?: (FilterFindManyRegionRegionIDOperatorsInput | null),_id?: (FilterFindManyRegion_idOperatorsInput | null)}

export interface FilterFindManyRegionRegionIDOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyRegion_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneShipperInput {
/** Shipper unique ID */
shipperID?: (Scalars['Float'] | null),companyName?: (Scalars['String'] | null),phone?: (Scalars['String'] | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterFindOneShipperOperatorsInput | null),OR?: (FilterFindOneShipperInput[] | null),AND?: (FilterFindOneShipperInput[] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindOneShipperOperatorsInput {shipperID?: (FilterFindOneShipperShipperIDOperatorsInput | null),_id?: (FilterFindOneShipper_idOperatorsInput | null)}

export interface FilterFindOneShipperShipperIDOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneShipper_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyShipperInput {
/** Shipper unique ID */
shipperID?: (Scalars['Float'] | null),companyName?: (Scalars['String'] | null),phone?: (Scalars['String'] | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterFindManyShipperOperatorsInput | null),OR?: (FilterFindManyShipperInput[] | null),AND?: (FilterFindManyShipperInput[] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManyShipperOperatorsInput {shipperID?: (FilterFindManyShipperShipperIDOperatorsInput | null),_id?: (FilterFindManyShipper_idOperatorsInput | null)}

export interface FilterFindManyShipperShipperIDOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManyShipper_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneSupplierInput {
/** Supplier unique ID */
supplierID?: (Scalars['Float'] | null),companyName?: (Scalars['String'] | null),contactName?: (Scalars['String'] | null),contactTitle?: (Scalars['String'] | null),address?: (FilterFindOneCustomerAddressInput | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterFindOneSupplierOperatorsInput | null),OR?: (FilterFindOneSupplierInput[] | null),AND?: (FilterFindOneSupplierInput[] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindOneSupplierOperatorsInput {supplierID?: (FilterFindOneSupplierSupplierIDOperatorsInput | null),companyName?: (FilterFindOneSupplierCompanyNameOperatorsInput | null),_id?: (FilterFindOneSupplier_idOperatorsInput | null)}

export interface FilterFindOneSupplierSupplierIDOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneSupplierCompanyNameOperatorsInput {gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),ne?: (Scalars['String'] | null),in?: ((Scalars['String'] | null)[] | null),nin?: ((Scalars['String'] | null)[] | null),regex?: (Scalars['RegExpAsString'] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindOneSupplier_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}


/** A connection to a list of items. */
export interface SupplierConnectionRequest{
    /** Total object count. */
    count?: boolean | number
    /** Information to aid in pagination. */
    pageInfo?: PageInfoRequest
    /** Information to aid in pagination. */
    edges?: SupplierEdgeRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection. */
export interface SupplierEdgeRequest{
    /** The item at the end of the edge */
    node?: SupplierRequest
    /** A cursor for use in pagination */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FilterFindManySupplierInput {
/** Supplier unique ID */
supplierID?: (Scalars['Float'] | null),companyName?: (Scalars['String'] | null),contactName?: (Scalars['String'] | null),contactTitle?: (Scalars['String'] | null),address?: (FilterFindManyCustomerAddressInput | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterFindManySupplierOperatorsInput | null),OR?: (FilterFindManySupplierInput[] | null),AND?: (FilterFindManySupplierInput[] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterFindManySupplierOperatorsInput {supplierID?: (FilterFindManySupplierSupplierIDOperatorsInput | null),companyName?: (FilterFindManySupplierCompanyNameOperatorsInput | null),_id?: (FilterFindManySupplier_idOperatorsInput | null)}

export interface FilterFindManySupplierSupplierIDOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManySupplierCompanyNameOperatorsInput {gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),ne?: (Scalars['String'] | null),in?: ((Scalars['String'] | null)[] | null),nin?: ((Scalars['String'] | null)[] | null),regex?: (Scalars['RegExpAsString'] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterFindManySupplier_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface MutationRequest{
    /** Create one document with mongoose defaults, setters, hooks and validation */
    createProduct?: [{record: CreateOneProductInput},CreateOneProductPayloadRequest]
    /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
    updateProduct?: [{_id: Scalars['MongoID'],record: UpdateByIdProductInput},UpdateByIdProductPayloadRequest]
    /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
    removeProduct?: [{
    /** Filter by fields */
    filter?: (FilterRemoveOneProductInput | null),sort?: (SortRemoveOneProductInput | null)},RemoveOneProductPayloadRequest] | RemoveOneProductPayloadRequest
    /** Create one document with mongoose defaults, setters, hooks and validation */
    createOrder?: [{record: CreateOneOrderInput},CreateOneOrderPayloadRequest]
    /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
    updateOrder?: [{_id: Scalars['MongoID'],record: UpdateByIdOrderInput},UpdateByIdOrderPayloadRequest]
    /** Remove one document: 1) Remove with hooks via findOneAndRemove. 2) Return removed document. */
    removeOrder?: [{
    /** Filter by fields */
    filter?: (FilterRemoveOneOrderInput | null),sort?: (SortRemoveOneOrderInput | null)},RemoveOneOrderPayloadRequest] | RemoveOneOrderPayloadRequest
    /** Update one document: 1) Retrieve one document by findById. 2) Apply updates to mongoose document. 3) Mongoose applies defaults, setters, hooks and validation. 4) And save it. */
    updateEmployee?: [{_id: Scalars['MongoID'],record: UpdateByIdEmployeeInput},UpdateByIdEmployeePayloadRequest]
    /** Remove all data and seed DB from scratch. Anyway data automatically reloaded every 30 minutes. */
    resetData?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateOneProductPayloadRequest{
    /** Document ID */
    recordId?: boolean | number
    /** Created document */
    record?: ProductRequest
    /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
    error?: ErrorInterfaceRequest
    query?: QueryRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateOneProductInput {
/** Unique product id */
productID?: (Scalars['Float'] | null),name?: (Scalars['String'] | null),supplierID?: (Scalars['Float'] | null),categoryID?: (Scalars['Float'] | null),quantityPerUnit?: (Scalars['String'] | null),unitPrice?: (Scalars['Float'] | null),unitsInStock?: (Scalars['Float'] | null),unitsOnOrder?: (Scalars['Float'] | null),reorderLevel?: (Scalars['Float'] | null),discontinued?: (Scalars['Boolean'] | null)}

export interface UpdateByIdProductPayloadRequest{
    /** Document ID */
    recordId?: boolean | number
    /** Updated document */
    record?: ProductRequest
    /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
    error?: ErrorInterfaceRequest
    query?: QueryRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateByIdProductInput {
/** Unique product id */
productID?: (Scalars['Float'] | null),name?: (Scalars['String'] | null),supplierID?: (Scalars['Float'] | null),categoryID?: (Scalars['Float'] | null),quantityPerUnit?: (Scalars['String'] | null),unitPrice?: (Scalars['Float'] | null),unitsInStock?: (Scalars['Float'] | null),unitsOnOrder?: (Scalars['Float'] | null),reorderLevel?: (Scalars['Float'] | null),discontinued?: (Scalars['Boolean'] | null)}

export interface RemoveOneProductPayloadRequest{
    /** Document ID */
    recordId?: boolean | number
    /** Removed document */
    record?: ProductRequest
    /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
    error?: ErrorInterfaceRequest
    query?: QueryRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FilterRemoveOneProductInput {
/** Unique product id */
productID?: (Scalars['Float'] | null),name?: (Scalars['String'] | null),supplierID?: (Scalars['Float'] | null),categoryID?: (Scalars['Float'] | null),quantityPerUnit?: (Scalars['String'] | null),unitPrice?: (Scalars['Float'] | null),unitsInStock?: (Scalars['Float'] | null),unitsOnOrder?: (Scalars['Float'] | null),reorderLevel?: (Scalars['Float'] | null),discontinued?: (Scalars['Boolean'] | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterRemoveOneProductOperatorsInput | null),OR?: (FilterRemoveOneProductInput[] | null),AND?: (FilterRemoveOneProductInput[] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterRemoveOneProductOperatorsInput {productID?: (FilterRemoveOneProductProductIDOperatorsInput | null),name?: (FilterRemoveOneProductNameOperatorsInput | null),unitPrice?: (FilterRemoveOneProductUnitPriceOperatorsInput | null),_id?: (FilterRemoveOneProduct_idOperatorsInput | null)}

export interface FilterRemoveOneProductProductIDOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterRemoveOneProductNameOperatorsInput {gt?: (Scalars['String'] | null),gte?: (Scalars['String'] | null),lt?: (Scalars['String'] | null),lte?: (Scalars['String'] | null),ne?: (Scalars['String'] | null),in?: ((Scalars['String'] | null)[] | null),nin?: ((Scalars['String'] | null)[] | null),regex?: (Scalars['RegExpAsString'] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterRemoveOneProductUnitPriceOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterRemoveOneProduct_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface CreateOneOrderPayloadRequest{
    /** Document ID */
    recordId?: boolean | number
    /** Created document */
    record?: OrderRequest
    /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
    error?: ErrorInterfaceRequest
    query?: QueryRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface CreateOneOrderInput {
/** Order unique ID */
orderID?: (Scalars['Float'] | null),customerID?: (Scalars['String'] | null),employeeID?: (Scalars['Float'] | null),orderDate?: (Scalars['Date'] | null),requiredDate?: (Scalars['Date'] | null),shippedDate?: (Scalars['Date'] | null),shipVia?: (Scalars['Float'] | null),freight?: (Scalars['Float'] | null),shipName?: (Scalars['String'] | null),shipAddress?: (CustomerAddressInput | null),
/** List of ordered products */
details?: ((OrderDetailsInput | null)[] | null)}

export interface CustomerAddressInput {street?: (Scalars['String'] | null),city?: (Scalars['String'] | null),region?: (Scalars['String'] | null),postalCode?: (Scalars['String'] | null),country?: (Scalars['String'] | null),phone?: (Scalars['String'] | null)}

export interface OrderDetailsInput {productID?: (Scalars['Float'] | null),unitPrice?: (Scalars['Float'] | null),quantity?: (Scalars['Float'] | null),discount?: (Scalars['Float'] | null)}

export interface UpdateByIdOrderPayloadRequest{
    /** Document ID */
    recordId?: boolean | number
    /** Updated document */
    record?: OrderRequest
    /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
    error?: ErrorInterfaceRequest
    query?: QueryRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateByIdOrderInput {
/** Order unique ID */
orderID?: (Scalars['Float'] | null),customerID?: (Scalars['String'] | null),employeeID?: (Scalars['Float'] | null),orderDate?: (Scalars['Date'] | null),requiredDate?: (Scalars['Date'] | null),shippedDate?: (Scalars['Date'] | null),shipVia?: (Scalars['Float'] | null),freight?: (Scalars['Float'] | null),shipName?: (Scalars['String'] | null),shipAddress?: (UpdateByIdCustomerAddressInput | null),
/** List of ordered products */
details?: ((UpdateByIdOrderDetailsInput | null)[] | null)}

export interface UpdateByIdCustomerAddressInput {street?: (Scalars['String'] | null),city?: (Scalars['String'] | null),region?: (Scalars['String'] | null),postalCode?: (Scalars['String'] | null),country?: (Scalars['String'] | null),phone?: (Scalars['String'] | null)}

export interface UpdateByIdOrderDetailsInput {productID?: (Scalars['Float'] | null),unitPrice?: (Scalars['Float'] | null),quantity?: (Scalars['Float'] | null),discount?: (Scalars['Float'] | null)}

export interface RemoveOneOrderPayloadRequest{
    /** Document ID */
    recordId?: boolean | number
    /** Removed document */
    record?: OrderRequest
    /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
    error?: ErrorInterfaceRequest
    query?: QueryRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface FilterRemoveOneOrderInput {
/** Order unique ID */
orderID?: (Scalars['Float'] | null),customerID?: (Scalars['String'] | null),employeeID?: (Scalars['Float'] | null),orderDate?: (Scalars['Date'] | null),requiredDate?: (Scalars['Date'] | null),shippedDate?: (Scalars['Date'] | null),shipVia?: (Scalars['Float'] | null),freight?: (Scalars['Float'] | null),shipName?: (Scalars['String'] | null),shipAddress?: (FilterRemoveOneCustomerAddressInput | null),
/** List of ordered products */
details?: ((FilterRemoveOneOrderDetailsInput | null)[] | null),_id?: (Scalars['MongoID'] | null),
/** List of *indexed* fields that can be filtered via operators. */
_operators?: (FilterRemoveOneOrderOperatorsInput | null),OR?: (FilterRemoveOneOrderInput[] | null),AND?: (FilterRemoveOneOrderInput[] | null)}

export interface FilterRemoveOneCustomerAddressInput {street?: (Scalars['String'] | null),city?: (Scalars['String'] | null),region?: (Scalars['String'] | null),postalCode?: (Scalars['String'] | null),country?: (Scalars['String'] | null),phone?: (Scalars['String'] | null)}

export interface FilterRemoveOneOrderDetailsInput {productID?: (Scalars['Float'] | null),unitPrice?: (Scalars['Float'] | null),quantity?: (Scalars['Float'] | null),discount?: (Scalars['Float'] | null)}


/** For performance reason this type contains only *indexed* fields. */
export interface FilterRemoveOneOrderOperatorsInput {orderID?: (FilterRemoveOneOrderOrderIDOperatorsInput | null),_id?: (FilterRemoveOneOrder_idOperatorsInput | null)}

export interface FilterRemoveOneOrderOrderIDOperatorsInput {gt?: (Scalars['Float'] | null),gte?: (Scalars['Float'] | null),lt?: (Scalars['Float'] | null),lte?: (Scalars['Float'] | null),ne?: (Scalars['Float'] | null),in?: ((Scalars['Float'] | null)[] | null),nin?: ((Scalars['Float'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface FilterRemoveOneOrder_idOperatorsInput {gt?: (Scalars['MongoID'] | null),gte?: (Scalars['MongoID'] | null),lt?: (Scalars['MongoID'] | null),lte?: (Scalars['MongoID'] | null),ne?: (Scalars['MongoID'] | null),in?: ((Scalars['MongoID'] | null)[] | null),nin?: ((Scalars['MongoID'] | null)[] | null),exists?: (Scalars['Boolean'] | null)}

export interface UpdateByIdEmployeePayloadRequest{
    /** Document ID */
    recordId?: boolean | number
    /** Updated document */
    record?: EmployeeRequest
    /** Error that may occur during operation. If you request this field in GraphQL query, you will receive typed error in payload; otherwise error will be provided in root `errors` field of GraphQL response. */
    error?: ErrorInterfaceRequest
    query?: QueryRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UpdateByIdEmployeeInput {
/** Category unique ID */
employeeID?: (Scalars['Float'] | null),lastName?: (Scalars['String'] | null),firstName?: (Scalars['String'] | null),title?: (Scalars['String'] | null),titleOfCourtesy?: (Scalars['String'] | null),birthDate?: (Scalars['Date'] | null),hireDate?: (Scalars['Date'] | null),address?: (UpdateByIdCustomerAddressInput | null),notes?: (Scalars['String'] | null),
/** ID of chief */
reportsTo?: (Scalars['Float'] | null),
/** Attached territory ID from region collection */
territoryIDs?: ((Scalars['Float'] | null)[] | null)}

export interface SubscriptionRequest{
    orderCreated?: OrderRequest
    orderUpdated?: OrderRequest
    orderRemoved?: boolean | number
    productCreated?: ProductRequest
    productUpdated?: ProductRequest
    productRemoved?: boolean | number
    employeeUpdated?: EmployeeRequest
    __typename?: boolean | number
    __scalar?: boolean | number
}


const ValidationError_possibleTypes: string[] = ['ValidationError']
export const isValidationError = (obj?: { __typename?: any } | null): obj is ValidationError => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isValidationError"')
  return ValidationError_possibleTypes.includes(obj.__typename)
}



const ErrorInterface_possibleTypes: string[] = ['ValidationError','MongoError','RuntimeError']
export const isErrorInterface = (obj?: { __typename?: any } | null): obj is ErrorInterface => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isErrorInterface"')
  return ErrorInterface_possibleTypes.includes(obj.__typename)
}



const ValidatorError_possibleTypes: string[] = ['ValidatorError']
export const isValidatorError = (obj?: { __typename?: any } | null): obj is ValidatorError => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isValidatorError"')
  return ValidatorError_possibleTypes.includes(obj.__typename)
}



const MongoError_possibleTypes: string[] = ['MongoError']
export const isMongoError = (obj?: { __typename?: any } | null): obj is MongoError => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMongoError"')
  return MongoError_possibleTypes.includes(obj.__typename)
}



const RuntimeError_possibleTypes: string[] = ['RuntimeError']
export const isRuntimeError = (obj?: { __typename?: any } | null): obj is RuntimeError => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRuntimeError"')
  return RuntimeError_possibleTypes.includes(obj.__typename)
}



const Query_possibleTypes: string[] = ['Query']
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
  return Query_possibleTypes.includes(obj.__typename)
}



const Viewer_possibleTypes: string[] = ['Viewer']
export const isViewer = (obj?: { __typename?: any } | null): obj is Viewer => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isViewer"')
  return Viewer_possibleTypes.includes(obj.__typename)
}



const Category_possibleTypes: string[] = ['Category']
export const isCategory = (obj?: { __typename?: any } | null): obj is Category => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCategory"')
  return Category_possibleTypes.includes(obj.__typename)
}



const ProductConnection_possibleTypes: string[] = ['ProductConnection']
export const isProductConnection = (obj?: { __typename?: any } | null): obj is ProductConnection => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isProductConnection"')
  return ProductConnection_possibleTypes.includes(obj.__typename)
}



const PageInfo_possibleTypes: string[] = ['PageInfo']
export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
  return PageInfo_possibleTypes.includes(obj.__typename)
}



const ProductEdge_possibleTypes: string[] = ['ProductEdge']
export const isProductEdge = (obj?: { __typename?: any } | null): obj is ProductEdge => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isProductEdge"')
  return ProductEdge_possibleTypes.includes(obj.__typename)
}



const Product_possibleTypes: string[] = ['Product']
export const isProduct = (obj?: { __typename?: any } | null): obj is Product => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isProduct"')
  return Product_possibleTypes.includes(obj.__typename)
}



const OrderConnection_possibleTypes: string[] = ['OrderConnection']
export const isOrderConnection = (obj?: { __typename?: any } | null): obj is OrderConnection => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isOrderConnection"')
  return OrderConnection_possibleTypes.includes(obj.__typename)
}



const OrderEdge_possibleTypes: string[] = ['OrderEdge']
export const isOrderEdge = (obj?: { __typename?: any } | null): obj is OrderEdge => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isOrderEdge"')
  return OrderEdge_possibleTypes.includes(obj.__typename)
}



const Order_possibleTypes: string[] = ['Order']
export const isOrder = (obj?: { __typename?: any } | null): obj is Order => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isOrder"')
  return Order_possibleTypes.includes(obj.__typename)
}



const CustomerAddress_possibleTypes: string[] = ['CustomerAddress']
export const isCustomerAddress = (obj?: { __typename?: any } | null): obj is CustomerAddress => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerAddress"')
  return CustomerAddress_possibleTypes.includes(obj.__typename)
}



const OrderDetails_possibleTypes: string[] = ['OrderDetails']
export const isOrderDetails = (obj?: { __typename?: any } | null): obj is OrderDetails => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isOrderDetails"')
  return OrderDetails_possibleTypes.includes(obj.__typename)
}



const Customer_possibleTypes: string[] = ['Customer']
export const isCustomer = (obj?: { __typename?: any } | null): obj is Customer => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCustomer"')
  return Customer_possibleTypes.includes(obj.__typename)
}



const Employee_possibleTypes: string[] = ['Employee']
export const isEmployee = (obj?: { __typename?: any } | null): obj is Employee => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isEmployee"')
  return Employee_possibleTypes.includes(obj.__typename)
}



const Shipper_possibleTypes: string[] = ['Shipper']
export const isShipper = (obj?: { __typename?: any } | null): obj is Shipper => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isShipper"')
  return Shipper_possibleTypes.includes(obj.__typename)
}



const Supplier_possibleTypes: string[] = ['Supplier']
export const isSupplier = (obj?: { __typename?: any } | null): obj is Supplier => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSupplier"')
  return Supplier_possibleTypes.includes(obj.__typename)
}



const CustomerPagination_possibleTypes: string[] = ['CustomerPagination']
export const isCustomerPagination = (obj?: { __typename?: any } | null): obj is CustomerPagination => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerPagination"')
  return CustomerPagination_possibleTypes.includes(obj.__typename)
}



const PaginationInfo_possibleTypes: string[] = ['PaginationInfo']
export const isPaginationInfo = (obj?: { __typename?: any } | null): obj is PaginationInfo => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPaginationInfo"')
  return PaginationInfo_possibleTypes.includes(obj.__typename)
}



const CustomerConnection_possibleTypes: string[] = ['CustomerConnection']
export const isCustomerConnection = (obj?: { __typename?: any } | null): obj is CustomerConnection => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerConnection"')
  return CustomerConnection_possibleTypes.includes(obj.__typename)
}



const CustomerEdge_possibleTypes: string[] = ['CustomerEdge']
export const isCustomerEdge = (obj?: { __typename?: any } | null): obj is CustomerEdge => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCustomerEdge"')
  return CustomerEdge_possibleTypes.includes(obj.__typename)
}



const EmployeePagination_possibleTypes: string[] = ['EmployeePagination']
export const isEmployeePagination = (obj?: { __typename?: any } | null): obj is EmployeePagination => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isEmployeePagination"')
  return EmployeePagination_possibleTypes.includes(obj.__typename)
}



const OrderPagination_possibleTypes: string[] = ['OrderPagination']
export const isOrderPagination = (obj?: { __typename?: any } | null): obj is OrderPagination => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isOrderPagination"')
  return OrderPagination_possibleTypes.includes(obj.__typename)
}



const ProductPagination_possibleTypes: string[] = ['ProductPagination']
export const isProductPagination = (obj?: { __typename?: any } | null): obj is ProductPagination => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isProductPagination"')
  return ProductPagination_possibleTypes.includes(obj.__typename)
}



const Region_possibleTypes: string[] = ['Region']
export const isRegion = (obj?: { __typename?: any } | null): obj is Region => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRegion"')
  return Region_possibleTypes.includes(obj.__typename)
}



const RegionTerritories_possibleTypes: string[] = ['RegionTerritories']
export const isRegionTerritories = (obj?: { __typename?: any } | null): obj is RegionTerritories => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRegionTerritories"')
  return RegionTerritories_possibleTypes.includes(obj.__typename)
}



const SupplierConnection_possibleTypes: string[] = ['SupplierConnection']
export const isSupplierConnection = (obj?: { __typename?: any } | null): obj is SupplierConnection => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSupplierConnection"')
  return SupplierConnection_possibleTypes.includes(obj.__typename)
}



const SupplierEdge_possibleTypes: string[] = ['SupplierEdge']
export const isSupplierEdge = (obj?: { __typename?: any } | null): obj is SupplierEdge => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSupplierEdge"')
  return SupplierEdge_possibleTypes.includes(obj.__typename)
}



const Mutation_possibleTypes: string[] = ['Mutation']
export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
  return Mutation_possibleTypes.includes(obj.__typename)
}



const CreateOneProductPayload_possibleTypes: string[] = ['CreateOneProductPayload']
export const isCreateOneProductPayload = (obj?: { __typename?: any } | null): obj is CreateOneProductPayload => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCreateOneProductPayload"')
  return CreateOneProductPayload_possibleTypes.includes(obj.__typename)
}



const UpdateByIdProductPayload_possibleTypes: string[] = ['UpdateByIdProductPayload']
export const isUpdateByIdProductPayload = (obj?: { __typename?: any } | null): obj is UpdateByIdProductPayload => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateByIdProductPayload"')
  return UpdateByIdProductPayload_possibleTypes.includes(obj.__typename)
}



const RemoveOneProductPayload_possibleTypes: string[] = ['RemoveOneProductPayload']
export const isRemoveOneProductPayload = (obj?: { __typename?: any } | null): obj is RemoveOneProductPayload => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRemoveOneProductPayload"')
  return RemoveOneProductPayload_possibleTypes.includes(obj.__typename)
}



const CreateOneOrderPayload_possibleTypes: string[] = ['CreateOneOrderPayload']
export const isCreateOneOrderPayload = (obj?: { __typename?: any } | null): obj is CreateOneOrderPayload => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isCreateOneOrderPayload"')
  return CreateOneOrderPayload_possibleTypes.includes(obj.__typename)
}



const UpdateByIdOrderPayload_possibleTypes: string[] = ['UpdateByIdOrderPayload']
export const isUpdateByIdOrderPayload = (obj?: { __typename?: any } | null): obj is UpdateByIdOrderPayload => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateByIdOrderPayload"')
  return UpdateByIdOrderPayload_possibleTypes.includes(obj.__typename)
}



const RemoveOneOrderPayload_possibleTypes: string[] = ['RemoveOneOrderPayload']
export const isRemoveOneOrderPayload = (obj?: { __typename?: any } | null): obj is RemoveOneOrderPayload => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRemoveOneOrderPayload"')
  return RemoveOneOrderPayload_possibleTypes.includes(obj.__typename)
}



const UpdateByIdEmployeePayload_possibleTypes: string[] = ['UpdateByIdEmployeePayload']
export const isUpdateByIdEmployeePayload = (obj?: { __typename?: any } | null): obj is UpdateByIdEmployeePayload => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateByIdEmployeePayload"')
  return UpdateByIdEmployeePayload_possibleTypes.includes(obj.__typename)
}



const Subscription_possibleTypes: string[] = ['Subscription']
export const isSubscription = (obj?: { __typename?: any } | null): obj is Subscription => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isSubscription"')
  return Subscription_possibleTypes.includes(obj.__typename)
}
