import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    appBar: {
        marginBottom: '30px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100px',
        padding: '20px 40px 20px 30px'
      },
      profile: {
        width: '20vw',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
      },
      img:{
        '&:hover':{
          cursor: 'pointer'
        },
      },

}))