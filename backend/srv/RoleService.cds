using { com.ey.roles.UserDetails as UserDetails } from '../db/data-model';

service RoleService {

    entity Users as projection on UserDetails;

}