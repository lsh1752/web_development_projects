import { Box, Button, Modal, Typography } from "@mui/material";
import LicatImage from '../assets/licat.png';


const MotivationalModal = ({ open, handleClose }) => {

  return(
    <Modal open={open} onClose={handleClose}>
      <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600,
        bgcolor: '#FFF',
        borderRadius: 4,
        p: 4,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
      >
        <Typography variant="h1" align="center" sx={{fontFamily: 'OTEnjoystoriesBA', color: '#5B2386', fontSize: '3rem'}}>
          해라
        </Typography>
        <Typography variant="h5" align="center" sx={{ color: '#5B2386', mb: 3}}>
          니 꿈을 응원은 해줄게
        </Typography>
        <Box sx={{textAlign: 'center', mb: 3}}>
          <img src={LicatImage} alt="사양이" />
        </Box>
        <Button
          fullWidth
          variant="contained"
          sx={{
            backgroundColor: '#FCEE21', color: '#5B2386', mb: 1
          }}
          onClick={handleClose}
        >
          종료하고 진짜 훈련하러 가기
        </Button>
        <Typography variant="caption" display='block' align="center" color="gray">
          닫기버튼임
        </Typography>
      </Box>
    </Modal>
  );
}

export default MotivationalModal;