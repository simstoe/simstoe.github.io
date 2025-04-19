import Swal from 'sweetalert2';

export const showToast = (options: {
  title: string;
  icon?: 'success' | 'error' | 'warning' | 'info' | 'question';
  timer?: number;
}) => {
  Swal.fire({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: options.timer ?? 2000,
    timerProgressBar: false,
    icon: options.icon ?? 'info',
    title: options.title,
    customClass: {
      popup: 'custom-toast'
    },
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });
};
