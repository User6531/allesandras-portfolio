export const initialState = {
    loading: true,
    error: false,
    errorMessage: '',
    language: (localStorage.getItem('language') || 'en'),
    theme: (localStorage.getItem('theme') || 'light'),
    isModalOpen: false
}