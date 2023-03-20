import Button from '../../Button';

export default function MenuItem({ data, onClick }) {
    return (
        <Button className="menu" to={data.to} leftIcon={data.icon} onClick={onClick}>
            {data.title}
        </Button>
    );
}
