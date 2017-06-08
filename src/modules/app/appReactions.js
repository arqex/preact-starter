import freezer from '../../freezer';

freezer.on('app:init', () => {
  freezer.get().set({status: 'OK'});
});
