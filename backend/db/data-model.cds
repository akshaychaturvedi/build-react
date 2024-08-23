namespace com.ey.roles;

using {cuid} from '@sap/cds/common';

entity UserDetails : cuid {
    firstName : String;
    lastName  : String;
    country   : String;
}
