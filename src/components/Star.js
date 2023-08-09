
import { Icon } from '@iconify/react';
import starIconSolid from '@iconify/icons-icon-park-solid/star';
import starIcon from '@iconify/icons-icon-park-outline/star';


const Star = (props) => {

    const {isFavorite } = props       

    return (
        <>
        { (isFavorite) ? 
            <Icon icon={starIconSolid} color="gold" width="25" /> :
             <Icon icon={starIcon} color="#222" width="25" />
        }     
        
        </>
        
   )

}

export default Star