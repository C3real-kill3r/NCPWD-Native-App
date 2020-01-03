const styles = {
  container: {
    flexGrow: 1,
    backgroundColor: 'rgba(12, 16, 38, 0.8)',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: 160,
    width: 160,
  },
  title: {
    fontFamily: 'sans-serif-thin',
    fontWeight: '600',
    fontSize: 20,
    textAlign: 'center',
    color: '#ffffff',
    paddingTop: 10,
    paddingBottom: 20,
  },
  signupForm: {
    paddingHorizontal: 30,
  },
  buttonContainer: {
    backgroundColor: '#44bd32',
    paddingVertical: 15,
    height: 50,
    borderRadius: 3,
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgba(255, 255, 255 , 1)',
    fontFamily: 'sans-serif-thin',
    fontWeight: '700',
  },
  loginText: {
    color: '#ffff',
    fontFamily: 'sans-serif-light',
    fontWeight: '600',
    textAlign: 'center',
  },
  loginLink: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'sans-serif-light',
    fontWeight: '700',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
  loginTextContainer: {
    paddingTop: 10,
    alignContent: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  errorText: {
    color: 'rgb(255, 10, 10)',
    fontFamily: 'sans-serif-light',
    fontWeight: '800',
    paddingBottom: 8,
  },
  nameContainer: {
    flexDirection: 'row',
    flexGrow: 1,
    width: '100%',
  },
  gap: {
    width: '6%',
  },
  firstName: {
    width: '47%',
  },
  lastName: {
    width: '47%',
  },
};
export default styles;
