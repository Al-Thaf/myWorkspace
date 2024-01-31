interface BrandProps {
  logo?: string;
  id: string;
  brand: string;
}

interface FormikProps {
  color: string;
  yearOfManufacture: string;
  insuranceValidUpto: string;
  kms: string;
  location: string;
  noOfOwners: string;
  transmission: string;
  externalFitments: string;
  photo: string;
}

interface FormProps {
  data: BrandProps;
}

export type { BrandProps, FormikProps, FormProps };
