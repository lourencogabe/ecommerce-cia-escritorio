import Container from "../Container";

const NavBar = () => {
    return (
        <div className="sticky top-0 w-full bg-slate-200 z-30 shadow-sm">
            <div className="py-4 border-b-[1px">
                <Container>
                    <div className="flex items-center justify-between gap-3 md-gap">Home</div>
                    <div>Cadeiras</div>
                    <div>Moveis</div>
                    <div>Serviços</div>
                    <div>Contato</div>
                </Container>
            </div>
        </div>
        ) 
}
 
export default NavBar;