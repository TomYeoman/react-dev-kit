import React from 'react'
import styles from './HeaderSmall.css';


class HeaderSmall extends React.Component {
  render () {
    return (
        <div className={`${styles.container} clearfix header-small`} >
			<h3 className={`${styles.header}`} >{this.props.text}</h3>
		</div>
    )
  }
};

export default HeaderSmall;
