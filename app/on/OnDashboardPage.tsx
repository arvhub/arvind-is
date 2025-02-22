import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

export default function onDashboardPage() {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to the root page
        navigate('/', { replace: true });
    }, [navigate]);

    return null;
}