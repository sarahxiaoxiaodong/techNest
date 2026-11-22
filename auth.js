
let client;

async function initializeAuth() {
    try {
        client = await auth0.createAuth0Client({
            domain: "dev-opfubwjvta61ykj7.us.auth0.com",
            clientId: "3Zl25icQLbolzppit3evmV5eRU3KuQit",
            authorizationParams: {
                redirect_uri: window.location.origin
            }
        });

        // Handle Auth0 errors
        if (window.location.search.includes("error=")) {
            const params = new URLSearchParams(window.location.search);
            alert(params.get("error_description") || params.get("error"));
            history.replaceState({}, "", location.pathname);
        }

        // Handle login redirect
        else if (
            location.search.includes("code=") &&
            location.search.includes("state=")
        ) {
            await client.handleRedirectCallback();
            history.replaceState({}, "", location.pathname);
        }

        await updateAuthUI();

    } catch (error) {
        console.error("Auth0 initialization error:", error);
    }
}

// Login
async function login() {
    await client.loginWithRedirect();
}

// Signup
async function signup() {
    await client.loginWithRedirect({
        authorizationParams: {
            screen_hint: "signup"
        }
    });
}

// Logout
async function logout() {
    await client.logout({
        logoutParams: {
            returnTo: window.location.origin
        }
    });
}

// Update popup
async function updateAuthUI() {
    const loggedIn = await client.isAuthenticated();

    const loginButtons = document.getElementById("hb-login-buttons");
    const userSection = document.getElementById("hb-user-section");
    const navButton = document.querySelector(".nav-login-btn");

    if (!loginButtons || !userSection) return;

    loginButtons.hidden = loggedIn;
    userSection.hidden = !loggedIn;

    if (navButton) {
        navButton.textContent = loggedIn ? "My Account" : "Log In";
    }

    if (loggedIn) {
        const user = await client.getUser();

        document.getElementById("hb-user-name").textContent =
            user.name || user.email || "HealthBridge User";
    }
}

// Popup
function openAuthPopup() {
    document.getElementById("auth-popup").classList.add("active");
}

function closeAuthPopup(event) {
    if (event && event.target !== event.currentTarget) return;

    document.getElementById("auth-popup").classList.remove("active");
}

// Initialize after page loads
document.addEventListener("DOMContentLoaded", initializeAuth);
