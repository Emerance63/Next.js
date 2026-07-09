
interface story{
    authorName: string;
    content: string;
}

export default function CreateStoryPage() {
    const [authorName , setAuthorName] = useState('');  
    const [content,setcontent] = useState('');
    const [formData, setFormData] = useState<createStoryDTO>({
        authorName: '',
        content: ''
    });